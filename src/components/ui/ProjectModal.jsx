import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  // Prevent background scrolling while modal is open
  useEffect(() => {
    if (!project) return;
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const liveUrl = project.liveDemo
    ? project.liveDemo.startsWith('http')
      ? project.liveDemo
      : `https://${project.liveDemo}`
    : null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(4, 6, 15, 0.88)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '680px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0c1021',
          border: '1px solid rgba(0, 242, 254, 0.35)',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0, 242, 254, 0.25)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            zIndex: 20,
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: 'rgba(6, 8, 19, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={18} />
        </button>

        {/* Project Image Banner */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(160px, 25vh, 230px)',
            overflow: 'hidden',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px'
          }}
        >
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0c1021 0%, transparent 60%)'
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '18px',
              display: 'flex',
              gap: '8px'
            }}
          >
            <span
              style={{
                background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
                color: '#060813',
                fontSize: '11px',
                fontWeight: 700,
                padding: '3px 10px',
                borderRadius: '9999px'
              }}
            >
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '20px 22px' }}>
          <h2
            style={{
              fontSize: 'clamp(20px, 3.5vw, 26px)',
              fontWeight: 800,
              color: '#f8fafc',
              marginBottom: '10px',
              lineHeight: 1.25
            }}
          >
            {project.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.65', marginBottom: '20px' }}>
            {project.shortDesc}
          </p>

          {/* Key Features */}
          {project.features && project.features.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h3
                style={{
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#00f2fe',
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <Sparkles size={16} /> Key Architecture & Features
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {project.features.map((feat, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      color: '#cbd5e1',
                      fontSize: '13px',
                      lineHeight: '1.5'
                    }}
                  >
                    <CheckCircle2 size={15} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Tags */}
          <div style={{ marginBottom: '24px' }}>
            <h4
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                color: '#64748b',
                marginBottom: '8px'
              }}
            >
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: 'rgba(0, 242, 254, 0.1)',
                    color: '#00f2fe',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    padding: '3px 10px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links (Responsive wrap) */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '16px'
            }}
            className="modal-action-btns"
          >
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-cyber-primary"
                style={{
                  flex: '1 1 auto',
                  minWidth: '180px',
                  justifyContent: 'center',
                  textDecoration: 'none'
                }}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-cyber-secondary"
              style={{
                flex: '1 1 auto',
                minWidth: '180px',
                justifyContent: 'center',
                textDecoration: 'none'
              }}
            >
              <GithubIcon size={16} /> View Code
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .modal-action-btns {
            flex-direction: column !important;
          }
          .modal-action-btns > a {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
