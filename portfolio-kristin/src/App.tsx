import React from 'react';
import { Layout, Typography } from 'antd';
import GeminiChat from './GeminiChat';
import './App.css';

const { Header, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  return (
    <Layout id="top" className="couture-app">
      <Header className="couture-header">
        <div className="couture-header__inner">
          <div className="couture-brand">
            <Title level={2} className="couture-brand__title">
              Kristina G. Zayimtsyan Couture
            </Title>
            <p className="couture-brand__tagline">
              Armenian Tracery &amp; Eco-Dye Atelier
            </p>
          </div>
          <nav className="couture-nav" aria-label="Primary">
            <a className="couture-nav__link" href="#gallery">
              Gallery
            </a>
            <a className="couture-nav__link" href="#cv">
              CV
            </a>
          </nav>
        </div>
      </Header>

      <Content className="couture-main">
        <div className="couture-main__inner site-layout-content">
          <header className="couture-hero">
            <div className="couture-hero__ornament" aria-hidden="true">
              ✦
            </div>
            <p className="couture-hero__lead">
              Bespoke textiles where Armenian ornamental rhythm meets
              plant-based colour—each piece composed as couture, with the
              patience of the atelier.
            </p>
          </header>

          <GeminiChat />

          <section id="gallery" className="couture-section" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="couture-section__heading">
              Gallery
            </h2>
            <p className="couture-section__text">
              A curated view of couture silhouettes, tracery-led surfaces, and
              eco-dyed palettes will appear here. For commissions or lookbook
              inquiries, use the assistant above or reach out through your
              preferred channel.
            </p>
          </section>

          <section id="cv" className="couture-section" aria-labelledby="cv-heading">
            <h2 id="cv-heading" className="couture-section__heading">
              Curriculum Vitae
            </h2>
            <p className="couture-section__text">
              Generate a tailored professional summary with the atelier
              assistant, or keep a static PDF in your deployment (for example{' '}
              <code className="couture-section__mono">/cv.pdf</code>
              ) and link it below when ready.
            </p>
            <a className="couture-section__link" href="#top">
              Back to top
            </a>
          </section>
        </div>
      </Content>

      <Footer className="couture-footer">
        Kristina G. Zayimtsyan <span>© 2026</span> — Couture &amp; Atelier
      </Footer>
    </Layout>
  );
}

export default App;
