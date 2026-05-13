import React from 'react';
import { Layout, Button } from 'antd';
import GeminiChat from './GeminiChat';
import VideoGen from './VideoGen';
import Gallery from './Gallery';
import { LOGO_SRC, CV_ORIGINAL_HREF } from './siteMedia';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout id="top" className="couture-app">
      <Header className="couture-header">
        <div className="couture-header__inner">
          <a href="#top" className="couture-brand couture-brand--link">
            <img
              src={LOGO_SRC}
              alt="Kristina G. Zayimtsyan Couture — KGZ"
              className="couture-brand__logo"
            />
            <p className="couture-brand__tagline">Armenian Tracery &amp; Eco-Dye Atelier</p>
          </a>
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
            <p className="couture-hero__lead">
              Bespoke textiles where Armenian ornamental rhythm meets
              plant-based colour—each piece composed as couture, with the
              patience of the atelier.
            </p>
          </header>

          <GeminiChat />

          <VideoGen />

          <section id="gallery" className="couture-section" aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="couture-section__heading">
              Gallery
            </h2>
            <p className="couture-section__text">
              Works on silk, paper, and performance pieces from the atelier. Click an image to
              open a larger preview.
            </p>
            <Gallery />
          </section>

          <section id="cv" className="couture-section" aria-labelledby="cv-heading">
            <h2 id="cv-heading" className="couture-section__heading">
              Curriculum Vitae
            </h2>
            <p className="couture-section__text">
              Download the original CV as a PDF, or use the assistant above to draft tailored
              text for applications and commissions.
            </p>
            <Button
              type="primary"
              size="large"
              href={CV_ORIGINAL_HREF}
              className="couture-cv-download"
              download
            >
              Download my Original CV
            </Button>
            <div>
              <a className="couture-section__link" href="#top">
                Back to top
              </a>
            </div>
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
