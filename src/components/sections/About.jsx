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
    <section id="about" style={{ position: 'relative', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#00f2fe',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '13px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '10px'
          }}>
            <User size={14} /> Introduction
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '16px' }}>
            Overview & <span className="gradient-text-cyan">Specialization</span>
          </h2>
          <p style={{ maxWidth: '680px', margin: '0 auto', color: '#94a3b8', fontSize: '16px', lineHeight: '1.7' }}>
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* 4 Interactive 3D Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '60px'
        }}>
          {SERVICES.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <TiltCard key={index} maxTilt={12}>
                <div
                  className="glass-panel"
                  style={{
                    padding: '32px 24px',
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
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 242, 254, 0.2) 0%, transparent 70%)',
                    filter: 'blur(10px)'
                  }} />

                  <div>
                    <div style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '14px',
                      background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.15), rgba(157, 78, 221, 0.2))',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                      boxShadow: '0 0 15px rgba(0, 242, 254, 0.2)'
                    }}>
                      <IconComponent size={26} color="#00f2fe" />
                    </div>

                    <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}>
                      {service.title}
                    </h3>

                    <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6' }}>
                      {service.description}
                    </p>
                  </div>

                  <div style={{
                    marginTop: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#00f2fe',
                    fontSize: '13px',
                    fontWeight: 600
                  }}>
                    <span>Explore Capability</span> <span>→</span>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Live Interactive Stats Counter Bar */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '20px',
            padding: '30px 40px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} style={{ position: 'relative' }}>
              <div style={{
                fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
                fontWeight: 900,
                fontFamily: "'Space Grotesk', sans-serif"
              }} className="gradient-text-cyan">
                {stat.value}
              </div>
              <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
