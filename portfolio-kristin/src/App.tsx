import React from 'react';
import { Layout, Typography, Card, Row, Col, Divider } from 'antd';

const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

const mainBg = '#FFFDF5';
const charcoal = '#222';
const gold = '#AC8E4E';
const headerStyle: React.CSSProperties = {
  background: mainBg,
  borderBottom: `1px solid ${gold}`,
  boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
  textAlign: 'center',
  padding: 0,
};

const heroStyle: React.CSSProperties = {
  background: mainBg,
  color: charcoal,
  padding: '72px 24px 40px 24px',
  minHeight: '370px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: 'serif',
};

const sectionTitleStyle: React.CSSProperties = {
  color: gold,
  fontWeight: 700,
  letterSpacing: 2,
  fontFamily: 'serif',
};

const cardStyle: React.CSSProperties = {
  background: '#FFFBEA',
  border: `1px solid ${gold}`,
  borderRadius: 10,
  boxShadow: '0 4px 20px 0 rgba(172,142,78, .04)',
  minHeight: 220,
  padding: '28px 28px 20px 28px',
  textAlign: 'center',
};

const textColor = { color: charcoal };

function App() {
  return (
    <Layout style={{ background: mainBg, minHeight: '100vh', fontFamily: 'serif' }}>
      <Header style={headerStyle}>
        <Title level={2} style={{ ...sectionTitleStyle, marginBottom: 0, fontSize: 40, lineHeight: '64px', letterSpacing: 6 }}>
          Kristina G. Zayimtsyan Couture
        </Title>
      </Header>
      <Content>
        <section style={heroStyle}>
          <Title
            level={1}
            style={{
              fontSize: 70,
              fontWeight: 700,
              color: charcoal,
              letterSpacing: 2,
              marginBottom: 12,
            }}
          >
            Kristina G. Zayimtsyan
          </Title>
          <Paragraph style={{ fontSize: 22, color: gold, maxWidth: 680, textAlign: 'center', marginBottom: 0 }}>
            Couture Silk Painting &amp; Eco-Dyeing Artistry
          </Paragraph>
        </section>
        <Divider style={{ borderColor: gold, margin: '0 auto 48px auto', maxWidth: 180, borderTopWidth: 2 }} />
        <Row gutter={48} justify="center" style={{ padding: '0 24px 64px 24px' }}>
          <Col xs={24} md={11}>
            <Card bordered={false} style={cardStyle} bodyStyle={{ padding: 0 }}>
              <Title level={3} style={sectionTitleStyle}>
                Silk Painting
              </Title>
              <Paragraph style={{ ...textColor, fontSize: 18, margin: '18px 0 0 0' }}>
                Exquisite hand-painted silk, where every brushstroke reveals a story. Each design is an exploration of color and texture, inspired by nature and haute couture traditions. Discover bespoke silk pieces—wearable art, unrivaled in elegance.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} md={11} style={{ marginTop: '32px', marginBottom: '0' }}>
            <Card bordered={false} style={cardStyle} bodyStyle={{ padding: 0 }}>
              <Title level={3} style={sectionTitleStyle}>
                Eco-Dyeing
              </Title>
              <Paragraph style={{ ...textColor, fontSize: 18, margin: '18px 0 0 0' }}>
                Botanical prints and organic hues, crafted with sustainable techniques. Eco-dyeing transforms natural flora into patterns on silk—each piece unique, luxurious, and environmentally conscious. Elevate your style with nature’s own palette.
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default App;
