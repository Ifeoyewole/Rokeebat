"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="container" style={{ position: 'relative', zIndex: 100 }}>
      <div className="nav-header animate-fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '32px 0' }}>
        <h2 style={{ fontFamily: 'var(--font-playfair)', fontSize: '2rem', color: 'var(--accent)', margin: 0, position: 'relative', zIndex: 101 }}>ARA</h2>
        
        {/* Mobile Hamburger Icon */}
        <div 
          className="mobile-menu-icon" 
          onClick={() => setIsOpen(!isOpen)}
          style={{ position: 'relative', zIndex: 101 }}
        >
          <div className="bar" style={{ transform: isOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}></div>
          <div className="bar" style={{ opacity: isOpen ? 0 : 1 }}></div>
          <div className="bar" style={{ transform: isOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <a href="#contact" onClick={closeMenu} className="mobile-only-btn" style={{ marginTop: '24px', padding: '16px 32px', backgroundColor: 'var(--accent)', color: 'var(--foreground-dark)', fontWeight: '600' }}>
            Let's Talk
          </a>
        </div>
        
        {/* Desktop Let's Talk Button */}
        <a href="#contact" className="desktop-talk-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', backgroundColor: 'var(--accent)', color: 'var(--foreground-dark)', fontWeight: '600', fontSize: '1rem', transition: 'opacity 0.3s' }}>
          Let's Talk <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </nav>
  );
}
