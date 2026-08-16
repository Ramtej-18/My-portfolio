import { X, ExternalLink, CheckCircle2, Sparkles } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(4, 6, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '720px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          backgroundColor: '#0c1021',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          borderRadius: '24px',
          boxShadow: '0 25px 60px rgba(0, 242, 254, 0.2)',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          <X size={20} />
        </button>

        {/* Project Image Banner */}
        <div style={{ position: 'relative', width: '100%', height: '280px', overflow: 'hidden', borderTopLeftRadius: '24px', borderTopRightRadius: '24px' }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, #0c1021 0%, transparent 60%)'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '16px',
            left: '24px',
            display: 'flex',
            gap: '8px'
          }}>
            <span style={{
              background: 'linear-gradient(90deg, #00f2fe, #4facfe)',
              color: '#060813',
              fontSize: '12px',
              fontWeight: 700,
              padding: '4px 12px',
              borderRadius: '9999px'
            }}>
              {project.category}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '24px 32px' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginBottom: '12px' }}>
            {project.title}
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '15px', lineHeight: '1.7', marginBottom: '24px' }}>
            {project.shortDesc}
          </p>

          {/* Key Features */}
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#00f2fe', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Sparkles size={18} /> Key Architecture & Features
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {project.features?.map((feat, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#cbd5e1', fontSize: '14px' }}>
                  <CheckCircle2 size={16} color="#00f2fe" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Tags */}
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px', color: '#64748b', marginBottom: '10px' }}>
              Technologies Used
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.tags?.map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: 'rgba(0, 242, 254, 0.1)',
                    color: '#00f2fe',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    padding: '4px 14px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontFamily: "'JetBrains Mono', monospace"
                  }}
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
            <a
              href={project.liveDemo}
              target="_blank"
              rel="noreferrer"
              className="btn-cyber-primary"
              style={{ flex: 1, textDecoration: 'none' }}
            >
              <ExternalLink size={18} /> Live Interactive Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="btn-cyber-secondary"
              style={{ flex: 1, textDecoration: 'none' }}
            >
              <GithubIcon size={18} /> View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
