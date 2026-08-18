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
        paddingTop: '90px',
        paddingBottom: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Background Neon Glow Highlights (Clamped) */}
      <div className="glow-orb-cyan" style={{ top: '8%', left: '-5%' }} />
      <div className="glow-orb-purple" style={{ top: '30%', right: '-5%' }} />

      <div className="container-custom" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Intro & Typography with Indicator Line */}
          <div>
            {/* Glowing Status Pill with Avatar */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                padding: '6px 14px',
                borderRadius: '9999px',
                marginBottom: '20px',
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.15)',
                maxWidth: '100%'
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#00f2fe',
                  boxShadow: '0 0 8px #00f2fe',
                  flexShrink: 0
                }}
              />
              <span
                style={{
                  color: '#00f2fe',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  fontFamily: "'Space Grotesk', sans-serif",
                  lineHeight: 1.3
                }}
              >
                Available For High-Impact Roles
              </span>
            </div>

            {/* Glowing Indicator Line + Heading Layout */}
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              {/* Vertical Neon Line with Dot (Responsive hide on extra small screens) */}
              <div
                className="hero-indicator-line"
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '8px',
                  flexShrink: 0
                }}
              >
                <div
                  style={{
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    backgroundColor: '#9d4edd',
                    boxShadow: '0 0 14px #9d4edd'
                  }}
                />
                <div
                  style={{
                    width: '3px',
                    height: '130px',
                    background: 'linear-gradient(180deg, #9d4edd 0%, rgba(0, 242, 254, 0.1) 100%)',
                    borderRadius: '2px',
                    marginTop: '4px'
                  }}
                />
              </div>

              {/* Title & Typewriter */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <h1
                  style={{
                    fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
                    fontWeight: 900,
                    lineHeight: '1.15',
                    color: '#f8fafc',
                    marginBottom: '12px',
                    letterSpacing: '-0.5px'
                  }}
                >
                  Hi, I'm <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.4em',
                      color: '#9d4edd',
                      verticalAlign: 'super',
                      marginLeft: '4px'
                    }}
                  >
                    ®
                  </span>
                </h1>

                {/* Subheading / Role */}
                <div
                  style={{
                    fontSize: 'clamp(1.15rem, 2.8vw, 1.85rem)',
                    fontWeight: 700,
                    color: '#e2e8f0',
                    marginBottom: '14px',
                    minHeight: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}
                >
                  <span>I'm</span>
                  <TypewriterText words={PERSONAL_INFO.roles} />
                </div>

                <p
                  style={{
                    color: '#94a3b8',
                    fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                    lineHeight: '1.65',
                    maxWidth: '520px',
                    marginBottom: '28px'
                  }}
                >
                  {PERSONAL_INFO.tagline}
                </p>

                {/* CTA Action Buttons */}
                <div
                  style={{
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}
                  className="hero-cta-container"
                >
                  <button
                    onClick={() => handleScrollTo('projects')}
                    className="btn-cyber-resume"
                  >
                    View Projects <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={() => handleScrollTo('contact')}
                    className="btn-cyber-resume"
                  >
                    Contact Me <Send size={15} />
                  </button>

                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cyber-resume"
                  >
                    Resume <FileDown size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Cyber Photo Card */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              minHeight: '380px',
              height: 'clamp(380px, 48vh, 480px)',
              borderRadius: '24px',
              overflow: 'hidden',
              backgroundColor: 'rgba(10, 14, 28, 0.4)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}
          >
            <HeroProfileCard />
          </div>
        </div>

        {/* Bottom Mouse Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '45px',
            marginBottom: '10px'
          }}
        >
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
              gap: '6px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                width: '24px',
                height: '40px',
                borderRadius: '14px',
                border: '2px solid rgba(0, 242, 254, 0.6)',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '5px',
                boxShadow: '0 0 12px rgba(0, 242, 254, 0.3)'
              }}
            >
              <div
                style={{
                  width: '5px',
                  height: '7px',
                  borderRadius: '3px',
                  backgroundColor: '#00f2fe',
                  animation: 'floatSlow 2s ease-in-out infinite'
                }}
              />
            </div>
            <span
              style={{
                fontSize: '10.5px',
                color: '#64748b',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: '1px'
              }}
            >
              SCROLL DOWN
            </span>
          </a>
        </div>
      </div>

      <style>{`
        .hero-indicator-line {
          display: flex;
        }
        @media (max-width: 520px) {
          .hero-indicator-line {
            display: none !important;
          }
          .hero-cta-container > * {
            flex: 1 1 calc(50% - 8px);
            min-width: 130px;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
