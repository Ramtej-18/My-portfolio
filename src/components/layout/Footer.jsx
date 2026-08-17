import React from 'react';
import { PERSONAL_INFO, NAV_LINKS } from '../../constants';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from '../ui/Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      backgroundColor: '#04060e',
      borderTop: '1px solid rgba(0, 242, 254, 0.15)',
      paddingTop: '60px',
      paddingBottom: '40px',
      marginTop: '80px'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Col 1: Brand & Status */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #00f2fe, #9d4edd)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                color: '#060813'
              }}>
                RT
              </div>
              <span style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>
                PORTFOLIO
                {/* <span style={{ color: '#00f2fe' }}>.3D</span> */}
              </span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
              Building the next generation of 3D, responsive, and high-performance full-stack web applications.
            </p>
            {/* Live Availability Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(16, 185, 129, 0.1)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              padding: '6px 14px',
              borderRadius: '9999px'
            }}>
              <span style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px #10b981'
              }} className="animate-pulse" />
              <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 600 }}>
                Available for New Projects & Roles
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#f8fafc', fontSize: '16px', fontWeight: 700, marginBottom: '20px', letterSpacing: '0.5px' }}>
              Quick Navigation
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  style={{
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#00f2fe';
                    e.currentTarget.style.paddingLeft = '6px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.paddingLeft = '0px';
                  }}
                >
                  <span style={{ color: '#00f2fe' }}>▸</span> {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Direct Connect & Socials */}
          <div>
            <h4 style={{ color: '#f8fafc', fontSize: '16px', fontWeight: 700, marginBottom: '20px' }}>
              Connect Universe
            </h4>
            <p style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>
              Feel free to connect on social media or reach out for collaboration.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a
                href={PERSONAL_INFO.socials.github}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.borderColor = '#00f2fe';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 242, 254, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0077b5';
                  e.currentTarget.style.borderColor = '#0077b5';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 119, 181, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socials. instagram}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(0, 242, 254, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#00f2fe';
                  e.currentTarget.style.borderColor = '#00f2fe';
                  e.currentTarget.style.boxShadow = '0 0 12px rgba(0, 242, 254, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#94a3b8';
                  e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <InstagramIcon  size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '30px'
        }}>
          <div style={{ color: '#64748b', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>© {new Date().getFullYear()} {PERSONAL_INFO.fullName}.</span>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              backgroundColor: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: '#00f2fe',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '13px',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.2)';
              e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 242, 254, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
