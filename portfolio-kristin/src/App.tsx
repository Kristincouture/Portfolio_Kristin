import React, { useState } from 'react';

const PortfolioCV = () => {
  return (
    <div style={{ backgroundColor: '#F5F1E9', minHeight: '100vh', padding: '0 0 40px 0', fontFamily: 'sans-serif', color: '#333' }}>
      
      {/* --- NAVIGATION BAR --- */}
      <header style={{ backgroundColor: '#3D1C22', color: '#D4AF37', padding: '20px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ margin: 0, letterSpacing: '3px', fontSize: '24px', fontWeight: 'bold' }}>KGZ COUTURE</h1>
        <nav style={{ display: 'flex', gap: '25px' }}>
          <a href="#about" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>ABOUT</a>
          <a href="#gallery" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>GALLERY</a>
          <a href="#cv" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: '700', fontSize: '14px', borderBottom: '2px solid #D4AF37' }}>CV</a>
          <a href="#contact" style={{ color: '#FFF', textDecoration: 'none', fontWeight: '600', fontSize: '14px' }}>CONTACT</a>
        </nav>
      </header>

      {/* --- MAIN CONTAINER --- */}
      <div style={{ maxWidth: '1200px', margin: '40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '320px 1fr', gap: '40px' }}>
        
        {/* --- LEFT COLUMN: PERSONAL PROFILE SIDEBAR --- */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
          {/* Rectangle Frame for Profile Photo */}
          <div style={{ border: '3px solid #3D1C22', padding: '6px', backgroundColor: '#FFF', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <img 
              src="/photos/profile-photo.jpg" 
              alt="Kristina G. Zayimtsyan" 
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
              onError={(e) => {
                // Fallback text if image isn't loaded yet
                e.currentTarget.style.display = 'none';
                const parent = e.currentTarget.parentElement;
                if (parent) parent.innerText = "[ Profile Photo: profile-photo.jpg ]";
              }}
            />
          </div>
          
          {/* Contact Details Card */}
          <div style={{ backgroundColor: '#FFF', padding: '25px', borderTop: '4px solid #3D1C22', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h3 style={{ color: '#3D1C22', marginTop: 0, borderBottom: '1px solid #EEE', paddingBottom: '10px', fontSize: '18px' }}>CONTACT</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: '15px 0', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '15px' }}>
              <li>✉️ <a href="mailto:your-email@example.com" style={{ color: '#333', textDecoration: 'none' }}>Email Me Directly</a></li>
              <li>📍 Gyumri, Armenia</li>
              <li>🌐 <a href="https://portfolio-kristin.vercel.app" style={{ color: '#333', textDecoration: 'none' }}>portfolio-kristin.vercel.app</a></li>
            </ul>
            
            {/* Download CV PDF Button */}
            <a href="/MyCV.txt" download style={{ display: 'block', textClassName: 'none' }}>
              <button style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '12px', border: 'none', width: '100%', fontWeight: 'bold', cursor: 'pointer', transition: '0.2s', marginTop: '10px', letterSpacing: '1px' }}>
                DOWNLOAD CV (PDF)
              </button>
            </a>
          </div>
        </aside>

        {/* --- RIGHT COLUMN: PROFESSIONAL DETAILS --- */}
        <main style={{ display: 'flex', flexDirection: 'column', gap: '35px' }}>
          
          {/* Section: About Me */}
          <section id="about" style={{ backgroundColor: '#FFF', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#3D1C22', marginTop: 0, borderBottom: '2px solid #3D1C22', paddingBottom: '8px', fontSize: '22px', letterSpacing: '1px' }}>ABOUT ME</h2>
            <p style={{ lineHeight: '1.6', fontSize: '16px', color: '#555' }}>
              Kristina G. Zayimtsyan is a professional Master of Arts (2025) and US Embassy Alumna. As an expert fashion designer, artist, and silk painter, she integrates traditional Armenian tracery motifs and ornate cultural scripts into couture dress concepts, high-fashion textiles, and fine art collections.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
              <div>
                <h4 style={{ color: '#3D1C22', marginBottom: '8px' }}>TECHNICAL SKILLS</h4>
                <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.5' }}>
                  <li>React & Next.js Frameworks</li>
                  <li>Vercel Deployment & GitHub Workflow</li>
                  <li>Google AI Studio & Prompt Engineering</li>
                  <li>Graphic & Web UI/UX Design</li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#3D1C22', marginBottom: '8px' }}>ARTISTIC EXPERTISE</h4>
                <ul style={{ paddingLeft: '20px', margin: 0, lineHeight: '1.5' }}>
                  <li>Fine Art Silk Painting (Batik & Hand-draw)</li>
                  <li>Sustainable Fashion & Natural Textile Production</li>
                  <li>Botanical Eco-Dyeing (Walnut, Onion skins, Turmeric)</li>
                  <li>Ornate Motifs & Traditional Ceramic Arts</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section: Portfolio Innovation (D-ID Video & AI) */}
          <section id="innovation" style={{ backgroundColor: '#FFF', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', borderLeft: '4px solid #D4AF37' }}>
            <h2 style={{ color: '#3D1C22', marginTop: 0, fontSize: '22px', letterSpacing: '1px' }}>DIGITAL INNOVATION & AI</h2>
            <p style={{ color: '#666', fontSize: '15px', marginTop: 0 }}>Merging ancient heritage crafts with cutting-edge artificial intelligence.</p>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '20px', marginTop: '20px' }}>
              {/* D-ID Box Placeholder */}
              <div style={{ border: '1px solid #DDD', padding: '15px', borderRadius: '4px', textAlign: 'center', backgroundColor: '#FAF9F6' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#3D1C22' }}>D-ID Avatar Animation</h4>
                <div style={{ backgroundColor: '#000', height: '220px', color: '#FFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', borderRadius: '4px' }}>
                  [ Interactive D-ID Video Player ]
                </div>
                <p style={{ fontSize: '12px', color: '#777', marginTop: '8px' }}>Animate portrait artwork using real-time generative speech.</p>
              </div>

              {/* AI Assistant Info */}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#3D1C22', color: '#FFF', padding: '20px', borderRadius: '4px' }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#D4AF37' }}>🤖 AI Portfolio Assistant</h4>
                <p style={{ fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                  Integrated interactive guide loaded with customized prompt parameters regarding natural eco-dye recipes and historical Armenian art curation histories.
                </p>
              </div>
            </div>
          </section>

          {/* Section: Experience & Highlights */}
          <section id="cv" style={{ backgroundColor: '#FFF', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#3D1C22', marginTop: 0, borderBottom: '2px solid #3D1C22', paddingBottom: '8px', fontSize: '22px', letterSpacing: '1px' }}>PROFESSIONAL EXPERIENCE</h2>
            
            <div style={{ marginTop: '15px' }}>
              <h3 style={{ fontSize: '18px', margin: '0 0 5px 0', color: '#3D1C22' }}>Creative Director & Lead Artist</h3>
              <span style={{ fontSize: '14px', color: '#888', fontWeight: 'bold' }}>Kristina G. Zayimtsyan Couture | 2023 - Present</span>
              <ul style={{ paddingLeft: '20px', marginTop: '10px', lineHeight: '1.6' }}>
                <li>Commissioned to produce large-scale fine art silk masterworks (4m x 4m dimensions) utilized inside live national symphonic orchestra and choral theater events.</li>
                <li>Pioneered zero-chemical organic production techniques utilizing local biological mordants and food by-products (onion, walnut hulls, turmeric processing).</li>
                <li>Curated modern studio galleries integrating traditional ceramic arts with luxury high-fashion branding systems.</li>
              </ul>
            </div>
          </section>

          {/* Section: Education */}
          <section style={{ backgroundColor: '#FFF', padding: '30px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <h2 style={{ color: '#3D1C22', marginTop: 0, borderBottom: '2px solid #3D1C22', paddingBottom: '8px', fontSize: '22px', letterSpacing: '1px' }}>EDUCATION & FELLOWSHIPS</h2>
            <div style={{ marginTop: '15px' }}>
              <p style={{ margin: '0 0 5px 0', fontWeight: 'bold', fontSize: '16px' }}>Master of Arts (M.A.) in Fine Arts & Textile Design</p>
              <p style={{ margin: '0 0 15px 0', color: '#777', fontSize: '14px' }}>Graduated 2025</p>
              <p style={{ margin: 0, fontSize: '15px' }}>🏅 <strong>US Embassy Alumna Status:</strong> Honored international exchange and training fellowship participant for artistic development.</p>
            </div>
          </section>

        </main>
      </div>

      {/* --- FOOTER --- */}
      <footer id="contact" style={{ textAlign: 'center', padding: '30px', borderTop: '1px solid #DDD', marginTop: '40px', fontSize: '14px', color: '#777' }}>
        © 2026 Kristina G. Zayimtsyan Couture — All Rights Reserved. Built with React & Cursor.
      </footer>

    </div>
  );
};

export default PortfolioCV;