import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Button, Card, Input, Typography, Alert, Space } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

const DID_BASE = 'https://api.d-id.com';

/**
 * Basic auth for D-ID. In studio you usually have an API user + API secret.
 * If you only have one value, set REACT_APP_DID_API_KEY alone (Basic username, empty password).
 */
function didAuthorizationHeader(): string | null {
  const user = process.env.REACT_APP_DID_API_USER?.trim();
  const secret =
    process.env.REACT_APP_DID_API_SECRET?.trim() ||
    process.env.REACT_APP_DID_API_PASSWORD?.trim() ||
    '';

  if (user) {
    const token = btoa(`${user}:${secret}`);
    return `Basic ${token}`;
  }

  const singleKey = process.env.REACT_APP_DID_API_KEY?.trim();
  if (singleKey) {
    return `Basic ${btoa(`${singleKey}:`)}`;
  }

  return null;
}

function getSilkPaintingSourceUrl(): string {
  const fromEnv = process.env.REACT_APP_SILK_PAINTING_URL?.trim();
  if (fromEnv) return fromEnv;
  return '';
}

const DEFAULT_SCRIPT =
  'This is a short narration for my audio and video quiz practice, ' +
  'using my four-meter silk painting as the visual source.';

type TalkStatus = 'created' | 'started' | 'done' | 'error' | string;

interface CreateTalkResponse {
  id: string;
  status: TalkStatus;
}

interface TalkGetResponse {
  id: string;
  status: TalkStatus;
  result_url?: string;
  error?: { kind?: string; description?: string };
}

const POLL_MS = 3000;
const MAX_POLL_MS = 5 * 60 * 1000;

const VideoGen: React.FC = () => {
  const [script, setScript] = useState(DEFAULT_SCRIPT);
  const [imageUrl, setImageUrl] = useState(getSilkPaintingSourceUrl);
  const [talkId, setTalkId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>('');
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const pollStartRef = useRef<number>(0);
  const pollTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clearPoll = useCallback(() => {
    if (pollTimerRef.current) {
      clearInterval(pollTimerRef.current);
      pollTimerRef.current = null;
    }
  }, []);

  useEffect(() => () => clearPoll(), [clearPoll]);

  const pollTalk = useCallback(
    async (id: string, auth: string) => {
      const { data } = await axios.get<TalkGetResponse>(`${DID_BASE}/talks/${id}`, {
        headers: { Authorization: auth },
      });
      setStatus(data.status);
      if (data.status === 'done' && data.result_url) {
        setResultUrl(data.result_url);
        setLoading(false);
        clearPoll();
        return;
      }
      if (data.status === 'error' || data.error) {
        const msg =
          data.error?.description ||
          data.error?.kind ||
          'Talk failed with status error.';
        setError(msg);
        setLoading(false);
        clearPoll();
        return;
      }
      if (Date.now() - pollStartRef.current > MAX_POLL_MS) {
        setError('Timed out waiting for video. Check your D-ID credits and dashboard.');
        setLoading(false);
        clearPoll();
      }
    },
    [clearPoll]
  );

  const handleGenerate = async () => {
    setError(null);
    setResultUrl(null);
    setTalkId(null);
    setStatus('');

    const auth = didAuthorizationHeader();
    if (!auth) {
      setError(
        'Missing credentials. In .env use either (1) REACT_APP_DID_API_USER + REACT_APP_DID_API_SECRET, ' +
          'or (2) REACT_APP_DID_API_KEY alone if your studio uses key-as-username with an empty password. Restart npm after editing .env.'
      );
      return;
    }

    const source_url = imageUrl.trim();
    if (!source_url.startsWith('https://')) {
      setError(
        'source_url must be a public HTTPS image URL (jpg/png) that D-ID can download. ' +
          'Localhost will not work. Put the file in public/ on Vercel and set REACT_APP_SILK_PAINTING_URL, ' +
          'or host the image on cloud storage with an https link.'
      );
      return;
    }

    if (script.trim().length < 3) {
      setError('Script must be at least 3 characters (D-ID API rule).');
      return;
    }

    setLoading(true);
    pollStartRef.current = Date.now();

    try {
      const { data } = await axios.post<CreateTalkResponse>(
        `${DID_BASE}/talks`,
        {
          source_url,
          script: {
            type: 'text',
            input: script.trim(),
            provider: {
              type: 'microsoft',
              voice_id: 'en-US-JennyNeural',
            },
          },
        },
        {
          headers: {
            Authorization: auth,
            'Content-Type': 'application/json',
          },
        }
      );

      setTalkId(data.id);
      setStatus(data.status);

      clearPoll();
      pollTimerRef.current = setInterval(() => {
        void pollTalk(data.id, auth);
      }, POLL_MS);
      await pollTalk(data.id, auth);
    } catch (e: unknown) {
      clearPoll();
      setLoading(false);
      if (axios.isAxiosError(e)) {
        const desc =
          (e.response?.data as { description?: string })?.description ||
          (e.response?.data as { error?: string })?.error;
        const msg =
          desc ||
          e.message ||
          'Request failed. If the browser shows a CORS error, call the same URL and body from Postman or a small server proxy.';
        setError(msg);
      } else {
        setError('Unexpected error while creating the talk.');
      }
    }
  };

  return (
    <Card style={{ maxWidth: 720, margin: '24px auto' }}>
      <Title level={4}>D-ID video (talk) — homework practice</Title>
      <Paragraph type="secondary">
        Uses the{' '}
        <Text code>Create Talk</Text> API: your silk painting as <Text code>source_url</Text>, text
        script for speech, then polling until <Text code>done</Text> and <Text code>result_url</Text>.
      </Paragraph>

      <Alert
        type="info"
        showIcon
        style={{ marginBottom: 16 }}
        message=".env (Create React App)"
        description={
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            <li>
              <Text code>REACT_APP_DID_API_USER</Text> + <Text code>REACT_APP_DID_API_SECRET</Text> (from D-ID
              studio), or only <Text code>REACT_APP_DID_API_KEY</Text> for key-as-username with an empty password.
            </li>
            <li>
              <Text code>REACT_APP_SILK_PAINTING_URL</Text> — public <Text strong>https</Text> URL
              to your painting (required for D-ID to fetch the image).
            </li>
          </ul>
        }
      />

      <Space direction="vertical" size="middle" style={{ width: '100%' }}>
        <div>
          <Text strong>Silk painting image URL</Text>
          <Input
            placeholder="https://your-cdn.example.com/silk-painting.jpg"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ marginTop: 6 }}
          />
        </div>
        <div>
          <Text strong>Script (spoken in the video)</Text>
          <TextArea rows={4} value={script} onChange={(e) => setScript(e.target.value)} style={{ marginTop: 6 }} />
        </div>
        <Button type="primary" onClick={() => void handleGenerate()} loading={loading} block>
          Generate video
        </Button>
      </Space>

      {error && (
        <Alert type="error" message={error} style={{ marginTop: 16 }} showIcon />
      )}

      {(talkId || status) && !error && (
        <Paragraph style={{ marginTop: 16 }}>
          <Text type="secondary">Talk id: </Text>
          <Text code>{talkId}</Text>
          <br />
          <Text type="secondary">Status: </Text>
          <Text code>{status || '—'}</Text>
        </Paragraph>
      )}

      {resultUrl && (
        <div style={{ marginTop: 20 }}>
          <Text strong>Result</Text>
          <video src={resultUrl} controls width="100%" style={{ marginTop: 8, borderRadius: 8 }} />
          <Paragraph style={{ marginTop: 8 }} copyable>
            <Text code>{resultUrl}</Text>
          </Paragraph>
        </div>
      )}
    </Card>
  );
};

export default VideoGen;
