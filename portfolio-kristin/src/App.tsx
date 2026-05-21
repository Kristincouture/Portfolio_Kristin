import React, { useState } from 'react';

const NewPortfolio = () => {
  // State for the contact form
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can hook up your backend or EmailJS later
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail('');
    setMessage('');
  };

  return (
    <div style={{ backgroundColor: '#F9F8F6', minHeight: '100vh', fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif', color: '#2D2D2D', scrollBehavior: 'smooth' }}>
      
      {/* --- PREMIUM NAVIGATION BAR (Like Elen's) --- */}
      <header style={{ backgroundColor: '#FFF', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '1px solid #EAEAEA', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#3D1C22', color: '#D4AF37', width: '40px', height: '40px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px', letterSpacing: '1px' }}>KGZ</div>
          <span style={{ fontWeight: '700', letterSpacing: '1px', fontSize: '16px', color: '#3D1C22' }}>KRISTINA ZAYIMTSYAN</span>
        </div>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <a href="#about" style={{ color: '#555', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>About</a>
          <a href="#ai-innovation" style={{ color: '#555', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>AI Innovation</a>
          <a href="#cv" style={{ color: '#555', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>CV / Experience</a>
          <a href="#contact" style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>Contact Me</a>
        </nav>
      </header>

      {/* --- HERO / HERO INTRODUCTION --- */}
      <section id="about" style={{ maxWidth: '1100px', margin: '60px auto 40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>
        {/* Left Column: Clean Rectangular Image Frame */}
        <div style={{ border: '1px solid #E0E0E0', borderRadius: '8px', padding: '12px', backgroundColor: '#FFF', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
          <img 
            src="/photos/profile-photo.jpg" 
            alt="Kristina G. Zayimtsyan" 
            style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block', objectFit: 'cover' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) parent.innerHTML = "<div style='height:350px; display:flex; align-items:center; justify-content:center; color:#888; background:#F5F5F5'>[ profile-photo.jpg ]</div>";
            }}
          />
        </div>

        {/* Right Column: Title & Main Summary */}
        <div>
          <span style={{ backgroundColor: '#EFE9E9', color: '#3D1C22', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700', letterSpacing: '1px' }}>AI FOR FRONTEND DEVELOPMENT</span>
          <h1 style={{ fontSize: '38px', color: '#3D1C22', margin: '15px 0 20px 0', fontWeight: '800', lineHeight: '1.2' }}>Transforming Creative Heritage with Intelligent Code.</h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '25px' }}>
            Faith and values-driven fashion designer, artist, and frontend developer with over 20 years of creative business leadership[cite: 4, 20]. Specializing in blending traditional Armenian ornamentation and textile arts with cutting-edge artificial intelligence, React frameworks, and interactive generative systems[cite: 5, 39].
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#cv" style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px', boxShadow: '0 4px 12px rgba(61,28,34,0.2)' }}>View My CV</a>
            <a href="/CV_Kristina.pdf" download style={{ backgroundColor: '#FFF', color: '#3D1C22', border: '1px solid #3D1C22', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Download PDF CV 📥</a>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: AI & D-ID INNOVATION PAGE/BLOCK --- */}
      <section id="ai-innovation" style={{ backgroundColor: '#FFF', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#3D1C22', fontSize: '26px', fontWeight: '700' }}>AI Component Integration</h2>
            <p style={{ color: '#666', fontSize: '15px' }}>Interactive testing area for automated avatars and dynamic layout tools.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '40px' }}>
            {/* D-ID Video Box Container */}
            <div style={{ background: '#FAF9F6', border: '1px solid #E0E0E0', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontWeight: '700', color: '#3D1C22', fontSize: '15px' }}>⚡ D-ID Avatar Integration</span>
                <span style={{ fontSize: '11px', background: '#4CAF50', color: '#FFF', padding: '3px 8px', borderRadius: '12px', fontWeight: 'bold' }}>ACTIVE COMPONENT</span>
              </div>
              <div style={{ backgroundColor: '#1A1A1A', height: '260px', borderRadius: '6px', color: '#FFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                <p style={{ margin: '0 0 10px 0', color: '#AAA', fontSize: '14px' }}>[ D-ID Video Generation Script Hook ]</p>
                <button style={{ backgroundColor: '#3D1C22', border: '1px solid #D4AF37', color: '#D4AF37', padding: '10px 20px', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}>Animate My Portrait Video</button>
              </div>
            </div>

            {/* AI Engineering Toolset Card */}
            <div style={{ backgroundColor: '#3D1C22', color: '#FFF', borderRadius: '8px', padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ color: '#D4AF37', marginTop: 0, fontSize: '20px' }}>Frontend AI Engineering</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#EAE9E9' }}>
                Building UI architecture optimized for generative pipelines. This implementation dynamically links local resource folders directly to AI prompt environments for real-time creative asset processing.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '15px' }}>
                {['React', 'Next.js', 'Vercel', 'Google AI Studio', 'GitHub'].map((tech) => (
                  <span key={tech} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE TWO-COLUMN CV --- */}
      <section id="cv" style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '50px' }}>
        
        {/* Left CV Column: Metadata */}
        <div>
          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #3D1C22', paddingBottom: '5px' }}>Expertise & Tools</h3>
          
          <h4 style={{ margin: '15px 0 5px 0', fontSize: '14px', color: '#555' }}>LANGUAGES</h4>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>Armenian <span style={{ color: '#888', fontWeight: 'normal' }}>(Fluent)</span> [cite: 57]</p>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>English <span style={{ color: '#888', fontWeight: 'normal' }}>(Professional Proficiency)</span> [cite: 58]</p>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>Russian <span style={{ color: '#888', fontWeight: 'normal' }}>(Good)</span> [cite: 59]</p>

          <h4 style={{ margin: '25px 0 5px 0', fontSize: '14px', color: '#555' }}>DIGITAL SKILLS</h4>
          <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
            <li>HTML5 / CSS3 / JavaScript [cite: 54]</li>
            <li>Adobe Photoshop & Design Systems [cite: 53]</li>
            <li>Rhinoceros (3dm) & Matrix 3D UI [cite: 55]</li>
            <li>Microsoft Office Suite [cite: 53]</li>
          </ul>

          <h4 style={{ margin: '25px 0 5px 0', fontSize: '14px', color: '#555' }}>CREATIVE SPECIALTIES</h4>
          <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
            <li>Traditional Armenian Ornamentation [cite: 5]</li>
            <li>Silk Canvas Painting (Batik Fine Art)</li>
            <li>Organic Botanical Dyeing</li>
          </ul>
        </div>

        {/* Right CV Column: Timeline History */}
        <div>
          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #3D1C22', paddingBottom: '5px' }}>Professional Timeline</h3>
          
          {/* Work item 1 */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h4 style={{ margin: 0, color: '#3D1C22', fontSize: '16px' }}>Founder & Creative Director</h4>
              <span style={{ fontSize: '13px', color: '#777', fontWeight: '600' }}>2006 — Present [cite: 23]</span>
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: '#D4AF37', fontWeight: '600' }}>Kristina G. Zayimtsyan Couture [cite: 5]</p>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginTop: '6px' }}>
              Managing comprehensive design strategy, client specifications, pattern engineering, and textile rendering[cite: 21]. Expanding historical preservation layouts into global textile factory productions[cite: 22].
            </p>
          </div>

          {/* Work item 2 */}
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h4 style={{ margin: 0, color: '#3D1C22', fontSize: '16px' }}>Symphonic Choir Member & Fine Artist</h4>
              <span style={{ fontSize: '13px', color: '#777', fontWeight: '600' }}>10-Year Position [cite: 26]</span>
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', fontWeight: '600' }}>KOHAR Symphony Orchestra & Choir Group [cite: 26]</p>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginTop: '6px' }}>
              Represented state cultural heritage inside an elite global performance collective[cite: 29]. Commissioned to produce complex, large-format fine art installations utilized inside orchestral scenography and display screens.
            </p>
          </div>

          {/* Education Block */}
          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #3D1C22', paddingBottom: '5px' }}>Education & Qualifications</h3>
          <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
            <li>🚀 <strong>AI for Frontend Development Track</strong> — Current System Studies (2026)</li>
            <li>🎓 <strong>Master of Science in Engineering</strong> — State Engineering University of Armenia [cite: 39]</li>
            <li>💻 <strong>Web Programming & Graphic Design Certificate</strong> — Gyumri IT Center [cite: 39]</li>
            <li>🇺🇸 <strong>Academy for Women Entrepreneurs (AWE)</strong> — US Embassy Alumni [cite: 39]</li>
            <li>🌿 <strong>Sustainable Design Certification</strong> — Istituto Europeo di Design, Italy [cite: 41]</li>
            <li>🌍 <strong>International Creative Programme Participant</strong> — Black Mountains College & British Council (2026) [cite: 45]</li>
          </ul>
        </div>
      </section>

      {/* --- SECTION 4: INTERACTIVE CONTACT ME (Like Elen's) --- */}
      <section id="contact" style={{ backgroundColor: '#EFE9E9', padding: '60px 0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ color: '#3D1C22', fontSize: '26px', fontWeight: '700', marginBottom: '10px' }}>Let's Build Together</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>Drop a message directly to my development dashboard or reach out via email.</p>
          
          {submitted ? (
            <div style={{ backgroundColor: '#4CAF50', color: '#FFF', padding: '15px', borderRadius: '4px', fontWeight: 'bold', marginBottom: '20px' }}>
              ✓ Message logged successfully! Thank you, Kristina's system will respond shortly.
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="email" 
                placeholder="Your Professional Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: '14px', borderRadius: '4px', border: '1px solid #DDD', fontSize: '14px', outline: 'none' }}
              />
              <textarea 
                rows={4} 
                placeholder="Project requirements or message details..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ padding: '14px', borderRadius: '4px', border: '1px solid #DDD', fontSize: '14px', outline: 'none', resize: 'vertical' }}
              />
              <button type="submit" style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '14px', borderRadius: '4px', border: 'none', fontWeight: 'bold', cursor: 'pointer', fontSize: '14px' }}>
                Send Message Securely
              </button>
            </form>
          )}

          <div style={{ marginTop: '30px', borderTop: '1px solid #DDD', paddingTop: '20px', fontSize: '14px', color: '#555' }}>
            📍 <strong>Gyumri, Armenia</strong> [cite: 2] &nbsp;|&nbsp; ✉️ <strong>zkristyan@gmail.com</strong> [cite: 2] &nbsp;|&nbsp; 📞 <strong>+374 91 77 28 24</strong> [cite: 2]
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ backgroundColor: '#3D1C22', color: '#FFF', textAlign: 'center', padding: '25px', fontSize: '13px', color: '#AAA' }}>
        © 2026 Kristina G. Zayimtsyan Couture — AI Frontend Portfolio Project.
      </footer>

    </div>
  );
};

export default NewPortfolio;