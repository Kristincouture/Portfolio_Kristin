import React from 'react';
import { Layout, Typography } from 'antd';
import GeminiChat from './GeminiChat'; // The import belongs at the top!
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout className="layout" style={{ minHeight: '100vh', backgroundColor: '#fffdfa' }}>
      <Header style={{ background: '#fff', borderBottom: '1px solid #d4af37', textAlign: 'center', padding: '20px 0', height: 'auto' }}>
        <Title level={2} style={{ color: '#b8860b', margin: 0, letterSpacing: '2px' }}>
          KRISTINA G. ZAYIMTSYAN COUTURE
        </Title>
      </Header>

      <Content style={{ padding: '50px' }}>
        <div className="site-layout-content">
          {/* This is your new AI Assistant! */}
          <GeminiChat />
          
          {/* Your other portfolio sections can go here */}
        </div>
      </Content>

      <Footer style={{ textAlign: 'center', color: '#b8860b', background: '#fff' }}>
        Kristina G. Zayimtsyan ©2026 Created with Passion
      </Footer>
    </Layout>
  );
}

export default App;