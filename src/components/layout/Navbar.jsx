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
        setScrolled(window.scrollY > 30);

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

  // Handle escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

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
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        backgroundColor: scrolled || mobileMenuOpen ? 'rgba(6, 8, 19, 0.92)' : 'rgba(6, 8, 19, 0.4)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(0, 242, 254, 0.2)' : '1px solid rgba(255, 255, 255, 0.05)',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.6)' : 'none'
      }}
    >
      <div
        className="container-custom"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '68px',
          minHeight: '68px'
        }}
      >
        {/* Brand Logo with 3D Cyber Emblem */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #00f2fe 0%, #9d4edd 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.5)',
              flexShrink: 0
            }}
          >
            <span
              style={{
                color: '#060813',
                fontWeight: 900,
                fontSize: '18px',
                fontFamily: "'Outfit', sans-serif"
              }}
            >
              RT
            </span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '16px',
                fontWeight: 800,
                letterSpacing: '0.5px',
                color: '#f8fafc',
                lineHeight: 1.2
              }}
            >
              PORTFOLIO
            </span>
            <span
              style={{
                fontSize: '9.5px',
                color: '#00f2fe',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '0.5px'
              }}
            >
              RAMTEJ TANDEL
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.5rem'
          }}
          className="desktop-nav"
        >
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
                  fontSize: '14.5px',
                  fontWeight: isActive ? 600 : 500,
                  cursor: 'pointer',
                  padding: '6px 10px',
                  borderRadius: '8px',
                  position: 'relative',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#f8fafc';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#94a3b8';
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '18px',
                      height: '2px',
                      backgroundColor: '#00f2fe',
                      borderRadius: '2px',
                      boxShadow: '0 0 8px #00f2fe'
                    }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Controls: Audio Toggle, Socials, Hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* SFX Audio Button */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            title={soundEnabled ? 'Disable UI Audio' : 'Enable UI Audio'}
            aria-label="Toggle Sound"
            style={{
              background: soundEnabled ? 'rgba(0, 242, 254, 0.15)' : 'rgba(255, 255, 255, 0.05)',
              border: `1px solid ${soundEnabled ? 'rgba(0, 242, 254, 0.5)' : 'rgba(255, 255, 255, 0.1)'}`,
              color: soundEnabled ? '#00f2fe' : '#64748b',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
          >
            {soundEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>

          {/* GitHub Icon - Desktop/Tablet */}
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            style={{
              color: '#94a3b8',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            className="nav-social-btn"
          >
            <GithubIcon size={16} />
          </a>

          {/* LinkedIn Icon - Desktop/Tablet */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            style={{
              color: '#0077b5',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'rgba(0, 119, 181, 0.1)',
              border: '1px solid rgba(0, 119, 181, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              flexShrink: 0
            }}
            className="nav-social-btn"
          >
            <LinkedinIcon size={16} />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: '#f8fafc',
              cursor: 'pointer',
              padding: '7px',
              borderRadius: '10px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              marginLeft: '2px'
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={22} color="#00f2fe" /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'rgba(6, 8, 19, 0.98)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(0, 242, 254, 0.25)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)',
            padding: '16px 20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            animation: 'fadeIn 0.25s ease-out'
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                style={{
                  background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 242, 254, 0.3)' : '1px solid transparent',
                  borderRadius: '10px',
                  color: isActive ? '#00f2fe' : '#cbd5e1',
                  fontSize: '15.5px',
                  fontWeight: isActive ? 700 : 500,
                  textAlign: 'left',
                  padding: '10px 14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.2s ease',
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
              >
                <span>{link.label}</span>
                {isActive && <span style={{ color: '#00f2fe', fontSize: '12px' }}>● ACTIVE</span>}
              </button>
            );
          })}

          {/* Social Links Row in Mobile Drawer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              marginTop: '12px',
              paddingTop: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)'
            }}
          >
            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#cbd5e1',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <GithubIcon size={16} /> GitHub
            </a>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#38bdf8',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                padding: '8px 16px',
                borderRadius: '9999px',
                backgroundColor: 'rgba(0, 119, 181, 0.1)',
                border: '1px solid rgba(0, 119, 181, 0.3)'
              }}
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .nav-social-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
