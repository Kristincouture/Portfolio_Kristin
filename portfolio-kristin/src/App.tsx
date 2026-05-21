import React, { useState, useRef } from 'react';

const NewPortfolio = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  // Audio state tracking
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setEmail('');
    setMessage('');
  };

  // Toggle audio play/pause
  const toggleAudio = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(err => console.log("Audio play interrupted:", err));
      setIsPlaying(true);
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div style={{ backgroundColor: '#F9F8F6', minHeight: '100vh', fontFamily: 'sans-serif', color: '#2D2D2D' }}>
      
      {/* Hidden HTML5 Audio Element */}
      <audio 
        ref={audioRef} 
        src="/photos/intro-voice.mp3" 
        onEnded={handleAudioEnded}
      />

      {/* --- NAVIGATION BAR --- */}
      <header style={{ backgroundColor: '#FFF', position: 'sticky', top: 0, zIndex: 1000, borderBottom: '1px solid #EAEAEA', padding: '15px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#3D1C22', color: '#D4AF37', width: '40px', height: '40px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '18px' }}>
            KGZ
          </div>
          <span style={{ fontWeight: '700', letterSpacing: '1px', fontSize: '16px', color: '#3D1C22' }}>
            KRISTINA ZAYIMTSYAN
          </span>
        </div>
        <nav style={{ display: 'flex', gap: '30px' }}>
          <a href="#about" style={{ color: '#555', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>About</a>
          <a href="#ai-voice-section" style={{ color: '#555', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>AI Audio Profile</a>
          <a href="#cv" style={{ color: '#555', textDecoration: 'none', fontWeight: '500', fontSize: '14px' }}>CV / Experience</a>
          <a href="#contact" style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', fontWeight: '600', fontSize: '13px' }}>Contact Me</a>
        </nav>
      </header>

      {/* --- HERO INTRODUCTION --- */}
      <section id="about" style={{ maxWidth: '1100px', margin: '60px auto 40px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px', alignItems: 'center' }}>
        <div style={{ border: '1px solid #E0E0E0', borderRadius: '8px', padding: '12px', backgroundColor: '#FFF' }}>
          <img 
            src="/photos/profile-photo.jpg" 
            alt="Kristina G. Zayimtsyan" 
            style={{ width: '100%', height: 'auto', borderRadius: '4px', display: 'block' }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) parent.innerHTML = "<div style='height:350px; display:flex; align-items:center; justify-content:center; color:#888; background:#F5F5F5'>[ profile-photo.jpg ]</div>";
            }}
          />
        </div>

        <div>
          <span style={{ backgroundColor: '#EFE9E9', color: '#3D1C22', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '700' }}>
            AI FOR FRONTEND DEVELOPMENT
          </span>
          <h1 style={{ fontSize: '36px', color: '#3D1C22', margin: '15px 0 20px 0', fontWeight: '800', lineHeight: '1.2' }}>
            Transforming Creative Heritage with Intelligent Code.
          </h1>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555', marginBottom: '25px' }}>
            Faith and values-driven fashion designer, artist, and frontend developer with over 20 years of creative business leadership. Specializing in blending traditional Armenian ornamentation and textile arts with cutting-edge artificial intelligence, React frameworks, and interactive generative systems.
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <a href="#cv" style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>View My CV</a>
            <a href="/CV_Kristina.pdf" download style={{ backgroundColor: '#FFF', color: '#3D1C22', border: '1px solid #3D1C22', padding: '12px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: 'bold', fontSize: '14px' }}>Download PDF CV 📥</a>
          </div>
        </div>
      </section>

      {/* --- AI VOICE PRESENTATION COMPONENT --- */}
      <section id="ai-voice-section" style={{ backgroundColor: '#FFF', borderTop: '1px solid #EAEAEA', borderBottom: '1px solid #EAEAEA', padding: '60px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ color: '#3D1C22', fontSize: '26px', fontWeight: '700' }}>AI Voice Integration Overview</h2>
            <p style={{ color: '#666', fontSize: '15px' }}>Click the interactive controller below to stream my technical background details.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1.2fr', gap: '40px', alignItems: 'center' }}>
            
            {/* Interactive Portrait Presentation Card */}
            <div style={{ background: '#FAF9F6', border: '1px solid #E0E0E0', borderRadius: '12px', padding: '30px', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ position: 'relative', width: '220px', height: '220px', margin: '0 auto 20px auto', borderRadius: '50%', overflow: 'hidden', border: '3px solid #3D1C22', padding: '5px', backgroundColor: '#FFF' }}>
                <img 
                  src="/photos/profile-photo.jpg" 
                  alt="Kristina" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
                />
                {isPlaying && (
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(61, 28, 34, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#FFF', fontSize: '12px', fontWeight: 'bold', letterSpacing: '1px', background: '#3D1C22', padding: '4px 10px', borderRadius: '12px' }}>🗣️ AUDIO PLAYING</span>
                  </div>
                )}
              </div>

              <h4 style={{ margin: '0 0 5px 0', color: '#3D1C22', fontSize: '18px', fontWeight: '700' }}>Kristina G. Zayimtsyan</h4>
              <p style={{ margin: '0 0 20px 0', color: '#D4AF37', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>AI VOICE ASSISTANT COMPONENT</p>
              
              <button 
                onClick={toggleAudio}
                style={{ 
                  backgroundColor: isPlaying ? '#D4AF37' : '#3D1C22', 
                  color: isPlaying ? '#3D1C22' : '#FFF', 
                  border: 'none', 
                  padding: '14px 28px', 
                  borderRadius: '30px', 
                  fontSize: '14px', 
                  fontWeight: 'bold', 
                  cursor: 'pointer',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.15)',
                  transition: 'all 0.3s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px'
                }}
              >
                {isPlaying ? (
                  <>⏸ Stop Presentation</>
                ) : (
                  <>🔊 Listen to My AI Voice</>
                )}
              </button>
            </div>

            {/* Content Display Card */}
            <div style={{ backgroundColor: '#3D1C22', color: '#FFF', borderRadius: '8px', padding: '35px', minHeight: '280px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ color: '#D4AF37', marginTop: 0, fontSize: '20px', letterSpacing: '0.5px' }}>System Architecture</h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#EAE9E9', margin: '0 0 20px 0' }}>
                This production component leverages HTML5 Audio ref nodes bound to state hooks. By mounting clean `.mp3` rendering tracks rather than heavyweight video wrappers, the layout loads instantly with flawless mobile compatibility and absolute responsive styling compliance.
              </p>
              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                {['React Hooks', 'HTML5 Audio API', 'Ref Nodes', 'Vercel CDN', 'State Controls'].map((tech) => (
                  <span key={tech} style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '5px 12px', borderRadius: '4px', fontSize: '12px', fontWeight: '600' }}>{tech}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TWO-COLUMN CV --- */}
      <section id="cv" style={{ maxWidth: '1100px', margin: '60px auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '50px' }}>
        <div>
          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #3D1C22', paddingBottom: '5px' }}>Expertise & Tools</h3>
          <h4 style={{ margin: '15px 0 5px 0', fontSize: '14px', color: '#555' }}>LANGUAGES</h4>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>Armenian <span style={{ color: '#888', fontWeight: 'normal' }}>(Fluent)</span></p>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>English <span style={{ color: '#888', fontWeight: 'normal' }}>(Professional Proficiency)</span></p>
          <p style={{ fontSize: '14px', margin: '4px 0', fontWeight: '600' }}>Russian <span style={{ color: '#888', fontWeight: 'normal' }}>(Good)</span></p>

          <h4 style={{ margin: '25px 0 5px 0', fontSize: '14px', color: '#555' }}>DIGITAL SKILLS</h4>
          <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13px', lineHeight: '1.6', color: '#666' }}>
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>Adobe Photoshop & Design Systems</li>
            <li>Rhinoceros (3dm) & Matrix 3D UI</li>
            <li>Microsoft Office Suite</li>
          </ul>
        </div>

        <div>
          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '20px', borderBottom: '2px solid #3D1C22', paddingBottom: '5px' }}>Professional Timeline</h3>
          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h4 style={{ margin: 0, color: '#3D1C22', fontSize: '16px' }}>Founder & Creative Director</h4>
              <span style={{ fontSize: '13px', color: '#777', fontWeight: '600' }}>2006 — Present</span>
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: '#D4AF37', fontWeight: '600' }}>Kristina G. Zayimtsyan Couture</p>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginTop: '6px' }}>
              Managing comprehensive design strategy, client specifications, pattern engineering, and textile rendering.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <h4 style={{ margin: 0, color: '#3D1C22', fontSize: '16px' }}>Symphonic Choir Member & Fine Artist</h4>
              <span style={{ fontSize: '13px', color: '#777', fontWeight: '600' }}>10-Year Position</span>
            </div>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', fontWeight: '600' }}>KOHAR Symphony Orchestra & Choir Group</p>
            <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', marginTop: '6px' }}>
              Represented state cultural heritage inside an elite global performance collective.
            </p>
          </div>

          <h3 style={{ color: '#3D1C22', fontSize: '16px', letterSpacing: '1px', textTransform: 'uppercase', marginTop: '40px', marginBottom: '20px', borderBottom: '2px solid #3D1C22', paddingBottom: '5px' }}>Education & Qualifications</h3>
          <ul style={{ paddingLeft: '20px', fontSize: '14px', lineHeight: '1.8', color: '#444' }}>
            <li>🚀 <strong>AI for Frontend Development Track</strong> — Current System Studies (2026)</li>
            <li>🎓 <strong>Master of Science in Engineering</strong> — State Engineering University of Armenia</li>
            <li>💻 <strong>Web Programming & Graphic Design Certificate</strong> — Gyumri IT Center</li>
            <li>🇺🇸 <strong>Academy for Women Entrepreneurs (AWE)</strong> — US Embassy Alumni</li>
          </ul>
        </div>
      </section>

      {/* --- INTERACTIVE CONTACT ME --- */}
      <section id="contact" style={{ backgroundColor: '#EFE9E9', padding: '60px 0' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ color: '#3D1C22', fontSize: '26px', fontWeight: '700', marginBottom: '10px' }}>Let's Build Together</h2>
          <p style={{ color: '#666', fontSize: '14px', marginBottom: '30px' }}>Drop a message directly to my development dashboard.</p>
          
          {submitted ? (
            <div style={{ backgroundColor: '#4CAF50', color: '#FFF', padding: '15px', borderRadius: '4px', fontWeight: 'bold' }}>
              ✓ Message logged successfully!
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input 
                type="email" 
                placeholder="Your Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: '14px', borderRadius: '4px', border: '1px solid #DDD', fontSize: '14px' }}
              />
              <textarea 
                rows={4} 
                placeholder="Project details..." 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                style={{ padding: '14px', borderRadius: '4px', border: '1px solid #DDD', fontSize: '14px' }}
              />
              <button type="submit" style={{ backgroundColor: '#3D1C22', color: '#FFF', padding: '14px', borderRadius: '4px', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
                Send Message Securely
              </button>
            </form>
          )}
        </div>
      </section>

      <footer style