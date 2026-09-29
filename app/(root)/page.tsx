import Image from 'next/image';
import { FaTiktok, FaLinkedin } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export default function Home() {
  const testimonials = [
    {
      quote: "Rokeebat's work on our platform was exceptional. She has a rare ability to balance aesthetic excellence with real user needs. Every decision was intentional, and the results spoke for themselves.",
      name: "Adepoju Adenike",
      role: "Senior Product Designer"
    },
    {
      quote: "Working with Rokeebat has been a great experience. She has a good eye for detail and knows how to turn ideas into clean, intuitive, and visually appealing designs. I really appreciate how she thinks about the user experience, not just how the design looks. She’s creative, receptive to feedback, and genuinely committed to improving her work.",
      name: "Dev Oyewole Victor",
      role: "Frontend Developer"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero-section container" style={{ minHeight: 'auto', display: 'flex', alignItems: 'flex-start', marginTop: '80px', paddingBottom: '100px' }}>
        <div className="hero-content animate-fade-in" style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
            <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--accent)' }}></div>
            <span style={{ color: 'var(--accent)', fontSize: '1.125rem', fontWeight: '600', letterSpacing: '1px' }}>UI/UX DESIGNER</span>
          </div>
          
          <h1 className="hero-title" style={{ fontSize: '6rem', marginBottom: '32px', lineHeight: '1', fontFamily: 'var(--font-playfair)' }}>
            <span style={{ display: 'block', color: 'white' }}>Adepoju</span>
            <span style={{ display: 'block', color: 'var(--accent)' }}>Rokeebat</span>
          </h1>
          
          <p style={{ fontSize: '1.125rem', color: 'white', fontWeight: '500', marginBottom: '48px', maxWidth: '450px', lineHeight: '1.6' }}>
            I design digital experiences that feel as good as they look: purposeful, precise, and deeply human.
          </p>
          
          <div className="hero-buttons" style={{ display: 'flex', gap: '24px' }}>
            <a href="#work" style={{ backgroundColor: 'white', color: 'black', padding: '16px 32px', fontWeight: '600', fontSize: '1rem', transition: 'opacity 0.3s' }}>
              View my work
            </a>
            <a href="#contact" style={{ backgroundColor: 'transparent', border: '1px solid white', color: 'white', padding: '16px 32px', fontWeight: '600', fontSize: '1rem', transition: 'opacity 0.3s' }}>
              Let's Talk
            </a>
          </div>
        </div>
        
        <div className="hero-visual animate-fade-in-delayed" style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
          {/* Gold Outline Box behind */}
          <div className="hero-image-outline" style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '480px', border: '1px solid var(--accent)', zIndex: 0 }}></div>
          
          {/* Main Image Box */}
          <div className="hero-image-box" style={{ position: 'relative', width: '400px', height: '480px', overflow: 'hidden', zIndex: 1, marginRight: '40px', marginTop: '40px' }}>
            <Image 
              src="/photo_2026-09-27_17-24-34.jpg" 
              alt="Adepoju Rokeebat" 
              fill 
              style={{ objectFit: 'cover' }} 
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container">
        <span className="section-tag">— SERVICES</span>
        <h2 style={{ fontSize: '3rem', marginBottom: '48px' }}>What I Do</h2>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          {['UI/UX Design', 'Product Design', 'Prototyping/Wireframing'].map((service, index) => (
            <div key={index} style={{ padding: '32px 0', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h3 style={{ fontSize: '2rem', fontWeight: '400', margin: 0 }}>{service}</h3>
              <span style={{ color: 'var(--accent)', fontSize: '1.5rem' }}>+</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="light-section" style={{ position: 'relative', marginTop: '100px' }}>
        <div style={{ position: 'absolute', top: '-50px', left: 0, right: 0, height: '100px', backgroundColor: 'var(--background-light)', transform: 'skewY(-2deg)', zIndex: -1 }}></div>
        <div className="container">
          <span className="section-tag">— ABOUT ME</span>
          <h2 style={{ fontSize: '2.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '48px 0', lineHeight: '1.4' }}>
            "I believe every pixel has a purpose and behind every great interface is a deeply human question."
          </h2>
          
          <div className="about-content" style={{ display: 'flex', gap: '64px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <p style={{ marginBottom: '24px', fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--foreground-dark)' }}>
                I'm Adepoju Rokeebat, a Computer Science student who discovered early that the most powerful thing about technology isn't what it does, but how it makes people feel. That realisation led me straight into design.
              </p>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.7', color: 'var(--foreground-dark)' }}>
                My journey into UI/UX started with a single question: why do some apps feel effortless while others create friction? That question became an obsession. Today, I approach every project as a design problem wrapped in a human story and I work to understand both before I sketch anything.
              </p>
            </div>
            
            <div style={{ flex: '1', minWidth: '300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              <div>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '8px' }}>2+</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '1px' }}>YEAR IN DESIGN</p>
              </div>
              <div>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '8px' }}>5+</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '1px' }}>PROJECTS COMPLETED</p>
              </div>
              <div>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '8px' }}>3</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '1px' }}>DISCIPLINES</p>
              </div>
              <div>
                <h3 style={{ fontSize: '3rem', color: 'var(--accent)', marginBottom: '8px' }}>100%</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: '600', letterSpacing: '1px' }}>INTENTIONAL</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '-50px', left: 0, right: 0, height: '100px', backgroundColor: 'var(--background-light)', transform: 'skewY(-2deg)', zIndex: -1 }}></div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="container" style={{ marginTop: '100px' }}>
        <span className="section-tag">— SELECTED WORK</span>
        <h2 style={{ fontSize: '3rem', marginBottom: '48px' }}>Projects</h2>
        
        <div className="projects-grid">
          {[
            { title: 'LearnDash', desc: 'An EdTech app designed to simplify tech learning through bite-sized lessons, practical content and a distraction-free learning experience.', link: 'https://www.figma.com/proto/A0yuTB0KDN9lZdPY02DMQ7/Untitled?node-id=540-207&t=REdFzafx4MHQoFUk-1&scaling=min-zoom&content-scaling=fixed&page-id=242%3A2&starting-point-node-id=452%3A300' },
            { title: 'Rockwears', desc: 'A modern fashion e-commerce app designed to make clothing discovery and online shopping simple, seamless and visually engaging.', link: 'https://www.figma.com/proto/A0yuTB0KDN9lZdPY02DMQ7/Untitled?node-id=262-4864&t=6ZiQLRQz8adGePGV-1&scaling=min-zoom&content-scaling=fixed&page-id=242%3A2&starting-point-node-id=259%3A4835&show-proto-sidebar=1' },
            { title: 'Belleful', desc: 'A modern food delivery app designed to make discovering meals, exploring restaurants and placing orders simple, smooth and enjoyable.', link: 'https://www.figma.com/proto/A0yuTB0KDN9lZdPY02DMQ7/Untitled?node-id=267-4884&t=0NtJQCtIe7D7YZb7-1&scaling=min-zoom&content-scaling=fixed&page-id=242%3A2&starting-point-node-id=452%3A300&show-proto-sidebar=1' }
          ].map((project, i) => (
            <div key={i} className="card">
              <div style={{ height: '200px', backgroundColor: '#1a1a1a', borderRadius: '8px', marginBottom: '24px' }}></div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>{project.desc}</p>
              <a href={project.link || "#"} target={project.link ? "_blank" : undefined} rel={project.link ? "noopener noreferrer" : undefined} style={{ color: 'var(--accent)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}>
                View project ↗
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="container" style={{ marginTop: '120px' }}>
        <span className="section-tag">— HOW I WORK</span>
        <h2 style={{ fontSize: '3rem', marginBottom: '0' }}>My Process</h2>
        
        <div className="custom-process-grid">
          {[
            { num: '01', title: 'Research', desc: 'Research users, stakeholders and the market to uncover the real problem.', pos: [1, 1], connects: ['down'] },
            { num: '02', title: 'Define', desc: 'Synthesise findings into a clear problem statement and measurable design goals.', pos: [2, 1], connects: ['down'] },
            { num: '03', title: 'Ideate', desc: 'I explore different solutions through brainstorming, user flows, sketches and information architecture.', pos: [3, 1], connects: ['right'] },
            { num: '04', title: 'Wireframe', desc: 'I create low-fidelity wireframe to establish the structure, layout and functionality before focusing on visual details.', pos: [3, 2], connects: ['right'] },
            { num: '05', title: 'Design', desc: 'I turn ideas into clean, engaging and user-friendly interfaces that balance aesthetics with functionality.', pos: [3, 3], connects: ['up'] },
            { num: '06', title: 'Prototype', desc: 'Create interactive prototypes that simulate the final experience for testing.', pos: [2, 3], connects: ['up'] },
            { num: '07', title: 'Test & Refine', desc: 'I review the design, gather feedback and identify areas that can be improved', pos: [1, 3], connects: [] }
          ].map((step, i) => (
            <div key={i} style={{ '--col': step.pos[1], '--row': step.pos[0] } as React.CSSProperties} className="process-step">
              <div style={{ width: '48px', height: '48px', border: '1px solid var(--accent)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.125rem', fontWeight: '500', fontFamily: 'var(--font-playfair)', flexShrink: 0 }}>
                {step.num}
              </div>
              <div style={{ backgroundColor: 'white', color: 'black', padding: '24px', borderRadius: '8px', flex: 1, position: 'relative', minHeight: '140px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ textAlign: 'center', marginBottom: '12px', fontSize: '1.125rem', fontWeight: '700' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: '1.6' }}>{step.desc}</p>
                
                {step.connects.includes('down') && <div className="process-line-down" />}
                {step.connects.includes('up') && <div className="process-line-up" />}
                {step.connects.includes('right') && <div className="process-line-right" />}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="light-section" style={{ padding: '120px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="section-tag">— TESTIMONIALS</span>
          <h2 style={{ fontSize: '3rem', marginBottom: '64px' }}>Kind Words</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', textAlign: 'left' }}>
            {testimonials.map((testimonial, idx) => (
              <div key={idx} style={{ backgroundColor: 'white', padding: '40px', borderRadius: '12px', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontSize: '1.125rem', fontStyle: 'italic', lineHeight: '1.7', marginBottom: '32px', flex: 1, color: 'var(--foreground-dark)' }}>
                  "{testimonial.quote}"
                </p>
                <div>
                  <h4 style={{ fontSize: '1.25rem', marginBottom: '4px', color: 'var(--foreground-dark)' }}>{testimonial.name}</h4>
                  <p style={{ color: 'var(--accent)', fontWeight: '600', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" style={{ padding: '80px 0 40px', backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '40px', marginBottom: '80px' }}>
            {/* Left Column: Logo & Socials */}
            <div>
              <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color: 'var(--accent)', marginBottom: '16px' }}>ARA</h2>
              <div style={{ display: 'flex', gap: '20px', color: 'white', fontSize: '24px' }}>
                {/* TikTok Icon */}
                <a href="https://www.tiktok.com/@rocky_bossss?_r=1&_t=ZS-9A2LlRPHFSe" aria-label="TikTok" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.3s', cursor: 'pointer', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                  <FaTiktok />
                </a>
                {/* Instagram Icon */}
                <a href="https://www.instagram.com/rocky_adenike?stkn=MWJ5NTFibnh5cnJnag==" aria-label="Instagram" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.3s', cursor: 'pointer', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                  <FiInstagram />
                </a>
                {/* LinkedIn Icon */}
                <a href="https://www.linkedin.com/in/rokeebat-adepoju-110a522a4?utm_source=share_via&utm_content=profile&utm_medium=member_android" aria-label="LinkedIn" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.3s', cursor: 'pointer', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                {/* WhatsApp Icon */}
                <a href="https://wa.me/9151794615" aria-label="WhatsApp" style={{ display: 'flex', alignItems: 'center', transition: 'color 0.3s', cursor: 'pointer', color: 'inherit' }} target="_blank" rel="noopener noreferrer">
                  <AiOutlineWhatsApp />
                </a>
              </div>
            </div>

            {/* Right Column: Contact Info & Form */}
            <div className="footer-right-col" style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', flex: '1', justifyContent: 'flex-end' }}>
              <div style={{ fontSize: '1.125rem', lineHeight: '1.5', maxWidth: '200px' }}>
                Have an idea?<br/>Let's bring it to life.
              </div>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '300px', width: '100%', maxWidth: '450px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Name</label>
                  <input type="text" style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Email</label>
                  <input type="email" style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '1rem', outline: 'none' }} />
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.875rem', fontWeight: '500', letterSpacing: '1px', textTransform: 'uppercase' }}>Message</label>
                  <textarea rows={4} style={{ width: '100%', padding: '12px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: 'white', fontSize: '1rem', outline: 'none', resize: 'vertical' }}></textarea>
                </div>
                
                <button type="button" style={{ width: '100%', padding: '16px 0', background: 'var(--accent)', color: 'var(--foreground-dark)', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '1rem', marginTop: '8px' }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Area */}
          <div>
            <div className="footer-bottom-links" style={{ display: 'flex', gap: '24px', color: '#ccc', marginBottom: '16px', flexWrap: 'wrap' }}>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#work">Work</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
            
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', color: '#888', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M14.83 14.83a4 4 0 1 1 0-5.66"/></svg>
              <span>2026 Adepoju Rokeebat</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}