import React from 'react';
import { PERSONAL_INFO, SERVICES, STATS } from '../../constants';
import TiltCard from '../ui/TiltCard';
import { Code2, Cuboid, Layers, Sparkles, User } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Cuboid: Cuboid,
  Layers: Layers,
  Sparkles: Sparkles
};

export default function About() {
  return (
    <section
      id="about"
      style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '60px'
      }}
    >
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '45px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#00f2fe',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12.5px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '10px'
            }}
          >
            <User size={14} /> Introduction
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.9rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f8fafc',
              marginBottom: '14px',
              lineHeight: 1.2
            }}
          >
            Overview & <span className="gradient-text-cyan">Specialization</span>
          </h2>
          <p
            style={{
              maxWidth: '680px',
              margin: '0 auto',
              color: '#94a3b8',
              fontSize: 'clamp(0.95rem, 1.6vw, 1.05rem)',
              lineHeight: '1.7'
            }}
          >
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* 4 Interactive Service Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px',
            marginBottom: '45px'
          }}
        >
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <TiltCard key={index} maxTilt={10}>
                <div
                  className="glass-panel"
                  style={{
                    padding: '24px 20px',
                    borderRadius: '20px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Glowing Top-Right Corner Accent */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '-25px',
                      right: '-25px',
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(0, 242, 254, 0.2) 0%, transparent 70%)',
                      filter: 'blur(10px)',
                      pointerEvents: 'none'
                    }}
                  />

                  <div>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(157, 78, 221, 0.2))',
                        border: '1px solid rgba(0, 242, 254, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                        boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)'
                      }}
                    >
                      <IconComponent size={24} color="#00f2fe" />
                    </div>

                    <h3
                      style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: '#f8fafc',
                        marginBottom: '10px'
                      }}
                    >
                      {service.title}
                    </h3>

                    <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6' }}>
                      {service.description}
                    </p>
                  </div>

                  <div
                    style={{
                      marginTop: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      color: '#00f2fe',
                      fontSize: '12.5px',
                      fontWeight: 600
                    }}
                  >
                    <span>Explore Capability</span> <span>→</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Live Interactive Stats Counter Bar (Responsive 2x2 on Mobile) */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '24px 20px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
            gap: '20px 16px',
            textAlign: 'center'
          }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <div
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
                  fontWeight: 900,
                  fontFamily: "'Space Grotesk', sans-serif"
                }}
                className="gradient-text-cyan"
              >
                {stat.value}
              </div>
              <div
                style={{
                  color: '#94a3b8',
                  fontSize: '13px',
                  fontWeight: 500,
                  marginTop: '2px'
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
