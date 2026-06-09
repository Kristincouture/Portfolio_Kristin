import React, { useState } from 'react';
import { sendContactMessage } from './api/emailjs';
import { sendTelegramMessage } from './api/telegram';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus('sending');

    try {
      // This sends to BOTH EmailJS and Telegram at the exact same time!
      await Promise.all([
        sendContactMessage({ fromName: name, message }),
        sendTelegramMessage({ fromName: name, message })
      ]);

      setStatus('success');
      setName('');
      setMessage('');
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h3 style={{ textAlign: 'center', color: '#3D1C22', marginBottom: '20px' }}>Contact Me</h3>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Your Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
            disabled={status === 'sending'}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px' }}>
          <label style={{ fontWeight: 'bold', color: '#333' }}>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message here..."
            required
            rows={5}
            disabled={status === 'sending'}
            style={{ padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px', resize: 'vertical' }}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          style={{
            marginTop: '15px',
            padding: '12px',
            backgroundColor: status === 'sending' ? '#999' : '#3D1C22',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: status === 'sending' ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            transition: 'background-color 0.2s'
          }}
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
      </form>

      {status === 'success' && (
        <p style={{ color: 'green', marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}>
          ✨ Thank you! Your message was sent successfully to email and Telegram!
        </p>
      )}

      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '15px', textAlign: 'center', fontWeight: 'bold' }}>
          ❌ Oops! Something went wrong. Please check your API keys or try again.
        </p>
      )}
    </div>
  );
};