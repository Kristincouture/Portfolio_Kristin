import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { Button, Input, Card, Typography } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

const GeminiChat = () => {
    const [prompt, setPrompt] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    // We are putting the key directly here to bypass the .env error
    const myKey = "AIzaSyDrVQAWS3ZjVjwTAIZWjZ5ej7li0gN-7GM";

    const handleSend = async () => {
        if (!prompt) return;
        setLoading(true);
        try {
            const result = await axios.post(
                `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${myKey}`,
                {
                    contents: [{ parts: [{ text: prompt }] }]
                }
            );
            setResponse(result.data.candidates[0].content.parts[0].text);
        } catch (error) {
            console.error("Error:", error);
            setResponse("The connection failed. Please make sure your internet is on and refresh the page.");
        }
        setLoading(false);
    };

    return (
        <Card style={{ maxWidth: 800, margin: '40px auto', borderRadius: '15px', border: '2px solid #d4af37', backgroundColor: '#fffdfa' }}>
            <Title level={3} style={{ color: '#b8860b', textAlign: 'center' }}>Kristina G. Zayimtsyan AI Assistant</Title>
            <TextArea 
                rows={6} 
                placeholder="Paste your CV here..." 
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
            />
            <Button 
                type="primary" 
                onClick={handleSend} 
                loading={loading}
                style={{ marginTop: 20, backgroundColor: '#b8860b', borderColor: '#b8860b', width: '100%', height: '45px' }}
            >
                Generate Professional CV
            </Button>
            
            {response && (
                <div style={{ marginTop: 30, textAlign: 'left', padding: '20px', background: '#ffffff', borderLeft: '5px solid #d4af37', borderRadius: '8px' }}>
                    <ReactMarkdown>{response}</ReactMarkdown>
                </div>
            )}
        </Card>
    );
};

export default GeminiChat;