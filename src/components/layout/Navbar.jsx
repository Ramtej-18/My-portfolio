import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../../constants';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/Icons';

export default function Navbar({ soundEnabled, setSoundEnabled, playAudio }) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let rafId = null;
    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 40);

        // Track active section
        const scrollPosition = window.scrollY + 200;
        for (let i = NAV_LINKS.length - 1; i >= 0; i--) {
          const section = document.getElementById(NAV_LINKS[i].id);
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(NAV_LINKS[i].id);
            break;
          }
        }
        rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const handleNavClick = (id) => {
    if (playAudio) playAudio();
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        backgroundColor: scrolled ? 'rgba(6, 8, 19, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 242, 254, 0.15)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div className="container-custom" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        {/* Brand Logo with 3D Cyber Emblem */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
        >
          <div style={{
            position: 'relative',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #00f2fe 0%, #9d4edd 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(0, 242, 254, 0.5)'
          }}>
            <span style={{ color: '#060813', fontWeight: 900, fontSize: '20px', fontFamily: "'Outfit', sans-serif" }}>
              RT
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '1px', color: '#f8fafc' }}>
              PORTFOLIO 
               {/* <span style={{ color: '#00f2fe' }}>.3D</span> */}
            </span>
            <span style={{ fontSize: '10px', color: '#00f2fe', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.5px' }}>
              RAMTEJ TANDEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#00f2fe' : '#94a3b8',
                  fontSize: '15px',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '18px',
                    height: '2px',
                    backgroundColor: '#00f2fe',
                    borderRadius: '2px',
                    boxShadow: '0 0 8px #00f2fe'
                  }} />
                )}
              </button>
            );
          })}
        </nav>

        {/* Social Icons & Sound Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* SFX Audio Button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? "Disable UI Audio" : "Enable UI Audio"}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              color: soundEnabled ? '#00f2fe' : '#64748b',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* GitHub Icon */}
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#94a3b8',
              padding: '8px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#00f2fe';
              e.currentTarget.style.borderColor = '#00f2fe';
              e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 242, 254, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94a3b8';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <GithubIcon size={18} />
          </a>

          {/* LinkedIn Icon */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            style={{
              color: '#0077b5',
              padding: '8px',
              borderRadius: '50%',
              background: 'rgba(0, 119, 181, 0.1)',
              border: '1px solid rgba(0, 119, 181, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 119, 181, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <LinkedinIcon size={18} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              background: 'none',
              border: 'none',
              color: '#f8fafc',
              cursor: 'pointer',
              padding: '6px'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(6, 8, 19, 0.96)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 242, 254, 0.2)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                background: 'none',
                border: 'none',
                color: activeSection === link.id ? '#00f2fe' : '#cbd5e1',
                fontSize: '16px',
                fontWeight: 600,
                textAlign: 'left',
                padding: '8px 0',
                cursor: 'pointer'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

      {/* Inline styles for responsive navbar */}
      <style>{`
        @media (min-width: 840px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
