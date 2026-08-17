import React from 'react';
import { PERSONAL_INFO } from '../../constants';
import TypewriterText from '../ui/TypewriterText';
import HeroProfileCard from '../ui/HeroProfileCard';
import { ArrowRight, Send, FileDown } from 'lucide-react';

export default function Hero({ playAudio }) {
  const handleScrollTo = (id) => {
    if (playAudio) playAudio();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '100px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Neon Glow Highlights */}
      <div className="glow-orb-cyan" style={{ top: '10%', left: '-10%' }} />
      <div className="glow-orb-purple" style={{ top: '25%', right: '-10%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Intro & Typography with Indicator Line */}
          <div>
            {/* Glowing Status Pill with Avatar */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              padding: '5px 16px 5px 6px',
              borderRadius: '9999px',
              marginBottom: '24px',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.15)'
            }}>
              
              <span style={{
                color: '#00f2fe',
                fontSize: '13px',
                fontWeight: 600,
                fontFamily: "'Space Grotesk', sans-serif"
              }}>
                Available For Innovation & High-Impact Roles
              </span>
            </div>

            {/* Glowing Indicator Line + Heading Layout */}
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              {/* Vertical Neon Line with Dot (Reference feature) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
                <div style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  backgroundColor: '#9d4edd',
                  boxShadow: '0 0 16px #9d4edd'
                }} />
                <div style={{
                  width: '3px',
                  height: '140px',
                  background: 'linear-gradient(180deg, #9d4edd 0%, rgba(0, 242, 254, 0.1) 100%)',
                  borderRadius: '2px',
                  marginTop: '4px'
                }} />
              </div>

              {/* Title & Typewriter */}
              <div>
                <h1 style={{
                  fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
                  fontWeight: 900,
                  lineHeight: '1.1',
                  color: '#f8fafc',
                  marginBottom: '12px',
                  letterSpacing: '-1px'
                }}>
                  Hi, I'm <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.4em',
                    color: '#9d4edd',
                    verticalAlign: 'super',
                    marginLeft: '4px'
                  }}>®</span>
                </h1>

                {/* Subheading / Role */}
                <div style={{
                  fontSize: 'clamp(1.3rem, 3vw, 2rem)',
                  fontWeight: 700,
                  color: '#e2e8f0',
                  marginBottom: '16px',
                  minHeight: '40px'
                }}>
                  <span>I'm </span>
                  <TypewriterText words={PERSONAL_INFO.roles} />
                </div>

                <p style={{
                  color: '#94a3b8',
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  lineHeight: '1.7',
                  maxWidth: '540px',
                  marginBottom: '32px'
                }}>
                  {PERSONAL_INFO.tagline}
                </p>

                {/* CTA Action Buttons */}
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => handleScrollTo('projects')}
                    className="btn-cyber-primary"
                  >
                    View Projects <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={() => handleScrollTo('contact')}
                    className="btn-cyber-secondary"
                  >
                    <Send size={16} /> Contact Me
                  </button>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 24px',
                      borderRadius: '12px',
                      border: '1px solid rgba(157, 78, 221, 0.5)',
                      background: 'rgba(157, 78, 221, 0.1)',
                      color: '#c084fc',
                      fontSize: '15px',
                      fontWeight: 700,
                      textDecoration: 'none',
                      fontFamily: "'Space Grotesk', sans-serif",
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 0 15px rgba(157, 78, 221, 0.15)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(157, 78, 221, 0.2)';
                      e.currentTarget.style.borderColor = '#9d4edd';
                      e.currentTarget.style.boxShadow = '0 0 20px rgba(157, 78, 221, 0.4)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(157, 78, 221, 0.1)';
                      e.currentTarget.style.borderColor = 'rgba(157, 78, 221, 0.5)';
                      e.currentTarget.style.boxShadow = '0 0 15px rgba(157, 78, 221, 0.15)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <FileDown size={16} /> Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Cyber Photo Card */}
          <div style={{
            position: 'relative',
            width: '100%',
            height: '480px',
            borderRadius: '24px',
            overflow: 'hidden',
            backgroundColor: 'rgba(10, 14, 28, 0.4)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <HeroProfileCard />
          </div>
        </div>

        {/* Bottom Mouse Scroll Indicator */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '60px',
          marginBottom: '20px'
        }}>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleScrollTo('about');
            }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '26px',
              height: '44px',
              borderRadius: '16px',
              border: '2px solid rgba(0, 242, 254, 0.6)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
              boxShadow: '0 0 12px rgba(0, 242, 254, 0.3)'
            }}>
              <div
                style={{
                  width: '6px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: '#00f2fe',
                  animation: 'floatSlow 2s ease-in-out infinite'
                }}
              />
            </div>
            <span style={{ fontSize: '11px', color: '#64748b', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '1px' }}>
              SCROLL DOWN
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
