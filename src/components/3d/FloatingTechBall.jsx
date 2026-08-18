import React, { useState } from 'react';

export default function FloatingTechBall({ skill }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="tech-ball-wrapper"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        transform: hovered ? 'translateY(-6px) scale(1.05)' : 'translateY(0px) scale(1)',
        touchAction: 'manipulation'
      }}
    >
      {/* 3D Cyber Hologram Sphere Container */}
      <div
        className="tech-ball-sphere"
        style={{
          borderRadius: '50%',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: hovered
            ? `radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.18), rgba(13, 17, 35, 0.95))`
            : `radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.08), rgba(10, 14, 28, 0.85))`,
          border: `2px solid ${hovered ? skill.color || '#00f2fe' : 'rgba(0, 242, 254, 0.3)'}`,
          boxShadow: hovered
            ? `0 0 25px ${skill.color || '#00f2fe'}, inset 0 0 15px ${skill.color || '#00f2fe'}`
            : `0 0 10px rgba(0, 242, 254, 0.15), inset 0 0 8px rgba(0, 0, 0, 0.5)`,
          transition: 'all 0.3s ease',
          overflow: 'hidden'
        }}
      >
        {/* Orbital Neon Ring */}
        <div
          style={{
            position: 'absolute',
            inset: '3px',
            borderRadius: '50%',
            border: `1px dashed ${skill.color || '#00f2fe'}`,
            opacity: hovered ? 0.9 : 0.4,
            animation: hovered ? 'spinSlow 4s linear infinite' : 'spinSlow 12s linear infinite'
          }}
        />

        {/* Center Tech Icon */}
        <span
          className="tech-ball-icon"
          style={{
            filter: hovered ? `drop-shadow(0 0 10px ${skill.color || '#00f2fe'})` : 'none',
            transition: 'transform 0.3s ease',
            transform: hovered ? 'scale(1.18) rotate(6deg)' : 'scale(1)'
          }}
        >
          {skill.icon}
        </span>
      </div>

      {/* Skill Label */}
      <span
        style={{
          marginTop: '8px',
          fontSize: '12px',
          fontWeight: 700,
          color: hovered ? '#ffffff' : skill.color || '#f8fafc',
          textShadow: hovered ? `0 0 10px ${skill.color || '#00f2fe'}` : 'none',
          fontFamily: "'Space Grotesk', sans-serif",
          transition: 'all 0.2s ease',
          letterSpacing: '0.5px'
        }}
      >
        {skill.name}
      </span>

      <style>{`
        .tech-ball-wrapper {
          width: 100px;
        }
        .tech-ball-sphere {
          width: 82px;
          height: 82px;
        }
        .tech-ball-icon {
          font-size: 28px;
        }
        @media (max-width: 640px) {
          .tech-ball-wrapper {
            width: 82px;
          }
          .tech-ball-sphere {
            width: 70px;
            height: 70px;
          }
          .tech-ball-icon {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
