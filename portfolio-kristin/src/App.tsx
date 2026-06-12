import React from 'react';

function App() {
  return (
    <div className="App">
      {/* --- PROFESSIONAL EXP LINE --- */}
      <section id="cv" style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px' }}>
        <div>
          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px' }}>
            Professional Experience
          </h3>
          
          {/* CV Download Button Container */}
          <div style={{ marginBottom: '30px', marginTop: '20px' }}>
            <a
              href="/CV_Kristina.pdf"
              download="Kristina_Zayimtsyan_CV.pdf"
              target="_blank"
              rel="noopener noreferrer" 
              style={{ 
                backgroundColor: '#3D1C22', 
                color: '#FFF', 
                padding: '12px 24px', 
                borderRadius: '5px', 
                textDecoration: 'none', 
                fontWeight: 'bold', 
                fontSize: '14px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
              }}
            >
              Download PDF CV 📥
            </a>
          </div>

          {/* Job Details */}
          <h4 style={{ margin: '15px 0 5px 0', fontSize: '14px', color: '#555' }}>
            Fashion & Graphic Designer | Frontend Developer
          </h4>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>
            Kristina G. Zayimtsyan Couture
          </p>
          <p style={{ fontSize: '14px', margin: '4px 0', color: '#777' }}>
            Overseeing complex custom operations, textile arts, and brand identity strategies.
          </p>

          <h4 style={{ margin: '25px 0 5px 0', fontSize: '14px', color: '#555' }}>
            Key Technical Skills
          </h4>
          <ul style={{ paddingLeft: '18px', margin: '0', fontSize: '13px', lineHeight: '1.8', color: '#333' }}>
            <li>HTML5 / CSS3 / Core JavaScript / React Framework</li>
            <li>Adobe Photoshop Asset Framing & Graphic Design</li>
            <li>Rhinoceros 3D System Layouts & Technical Design</li>
            <li>Sustainable Fashion & Textile Artisanal Frameworks</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;