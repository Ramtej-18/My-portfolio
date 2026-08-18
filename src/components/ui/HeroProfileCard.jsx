import React, { useState } from 'react';
import TiltCard from './TiltCard';

export default function HeroProfileCard() {
  const [rgbColor, setRgbColor] = useState('#00f2fe');

  const colorOptions = [
    { name: 'Cyan Neon', color: '#00f2fe' },
    { name: 'Purple Cyber', color: '#9d4edd' },
    { name: 'Emerald Wave', color: '#10b981' },
    { name: 'Solar Gold', color: '#ffb703' }
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '360px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '10px'
      }}
    >
      {/* Interactive RGB Color Preset Selector */}
      <div
        style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          background: 'rgba(10, 14, 28, 0.88)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '5px 10px',
          borderRadius: '9999px',
          border: `1px solid ${rgbColor}40`,
          boxShadow: `0 0 15px ${rgbColor}20`
        }}
      >
        <span
          style={{
            fontSize: '10px',
            color: '#94a3b8',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 600
          }}
        >
          RGB:
        </span>
        {colorOptions.map((opt) => (
          <button
            key={opt.color}
            onClick={() => setRgbColor(opt.color)}
            title={opt.name}
            aria-label={`Select ${opt.name}`}
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              backgroundColor: opt.color,
              border: rgbColor === opt.color ? '2px solid #ffffff' : '1px solid transparent',
              cursor: 'pointer',
              boxShadow: rgbColor === opt.color ? `0 0 10px ${opt.color}` : 'none',
              transform: rgbColor === opt.color ? 'scale(1.15)' : 'scale(1)',
              transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
              padding: 0
            }}
          />
        ))}
      </div>

      {/* Cyber Background Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          inset: '10px',
          borderRadius: '24px',
          background: `radial-gradient(circle at 50% 50%, ${rgbColor}25 0%, transparent 70%)`,
          filter: 'blur(25px)',
          pointerEvents: 'none',
          transition: 'background 0.4s ease'
        }}
      />

      {/* Main 3D Interactive Cyber Card */}
      <TiltCard
        maxTilt={10}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '360px',
            height: 'clamp(320px, 44vh, 410px)',
            borderRadius: '20px',
            overflow: 'hidden',
            border: `2px solid ${rgbColor}60`,
            boxShadow: `0 20px 40px rgba(0, 0, 0, 0.6), 0 0 25px ${rgbColor}30`,
            background: 'rgba(8, 12, 24, 0.9)',
            transition: 'border-color 0.4s ease, box-shadow 0.4s ease'
          }}
        >
          {/* Ramtej's Photo */}
          <img
            src="/ramtej.jpg"
            alt="Ramtej Tandel"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 15%',
              display: 'block'
            }}
          />

          {/* Holographic Gradient Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, transparent 50%, rgba(6, 8, 19, 0.85) 85%, rgba(6, 8, 19, 0.98) 100%)',
              pointerEvents: 'none'
            }}
          />

          {/* Bottom Identity & Active Status Bar */}
          <div
            style={{
              position: 'absolute',
              bottom: '10px',
              left: '10px',
              right: '10px',
              backgroundColor: 'rgba(10, 14, 28, 0.9)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: `1px solid ${rgbColor}40`,
              borderRadius: '12px',
              padding: '8px 12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px'
            }}
          >
            <div style={{ minWidth: 0 }}>
              <div
                style={{
                  color: '#f8fafc',
                  fontWeight: 800,
                  fontSize: '14px',
                  fontFamily: "'Outfit', sans-serif",
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                Ramtej Tandel
              </div>
              <div
                style={{
                  color: rgbColor,
                  fontSize: '10.5px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                ⚡ Full-Stack Developer
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                backgroundColor: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                padding: '3px 7px',
                borderRadius: '9999px',
                flexShrink: 0
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981',
                  boxShadow: '0 0 6px #10b981'
                }}
              />
              <span style={{ fontSize: '9.5px', color: '#10b981', fontWeight: 700 }}>ONLINE</span>
            </div>
          </div>
        </div>
      </TiltCard>

      {/* 3D Interaction Hint */}
      <div
        style={{
          position: 'absolute',
          bottom: '4px',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: '10.5px',
          color: '#64748b',
          fontFamily: "'JetBrains Mono', monospace",
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
          whiteSpace: 'nowrap'
        }}
      >
        <span>✨ 3D Interactive Card</span>
      </div>
    </div>
  );
}
