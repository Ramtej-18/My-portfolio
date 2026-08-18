import React, { useState } from 'react';
import { QUALIFICATIONS } from '../../constants';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Qualifications() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section
      id="qualifications"
      style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '60px'
      }}
    >
      <div className="container-custom">
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              color: '#9d4edd',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '12.5px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              marginBottom: '10px'
            }}
          >
            <Briefcase size={14} /> My Journey
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
            Qualifications & <span className="gradient-text-purple">Experience</span>
          </h2>
          <p
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: '#94a3b8',
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
            }}
          >
            A track record of shipping production-grade applications, mastering modern web architecture, and continuous learning.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              background: 'rgba(13, 17, 35, 0.85)',
              padding: '4px',
              borderRadius: '9999px',
              border: '1px solid rgba(157, 78, 221, 0.3)',
              maxWidth: '100%'
            }}
          >
            <button
              onClick={() => setActiveTab('experience')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: activeTab === 'experience' ? '#9d4edd' : 'transparent',
                color: activeTab === 'experience' ? '#fff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '13.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              <Briefcase size={15} /> Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              style={{
                padding: '8px 18px',
                borderRadius: '9999px',
                border: 'none',
                backgroundColor: activeTab === 'education' ? '#9d4edd' : 'transparent',
                color: activeTab === 'education' ? '#fff' : '#94a3b8',
                fontWeight: 600,
                fontSize: '13.5px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              <GraduationCap size={15} /> Education
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Central Line */}
          <div
            className="timeline-central-line"
            style={{
              position: 'absolute',
              top: '15px',
              bottom: '15px',
              width: '3px',
              background: 'linear-gradient(180deg, #9d4edd 0%, #00f2fe 100%)',
              borderRadius: '2px'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {activeTab === 'experience'
              ? QUALIFICATIONS.experience.map((item, index) => (
                  <div key={index} className="timeline-item" style={{ display: 'flex', position: 'relative' }}>
                    {/* Glowing Node */}
                    <div
                      className="timeline-node"
                      style={{
                        borderRadius: '50%',
                        backgroundColor: '#0c0f22',
                        border: '2.5px solid #9d4edd',
                        boxShadow: '0 0 15px rgba(157, 78, 221, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 2
                      }}
                    >
                      <Briefcase size={17} color="#00f2fe" />
                    </div>

                    {/* Card Content */}
                    <div
                      className="glass-panel"
                      style={{
                        flexGrow: 1,
                        padding: '20px 18px',
                        borderRadius: '16px',
                        minWidth: 0
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          flexWrap: 'wrap',
                          gap: '6px 12px',
                          marginBottom: '8px'
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 'clamp(16px, 2.5vw, 19px)',
                            fontWeight: 700,
                            color: '#f8fafc',
                            minWidth: 0
                          }}
                        >
                          {item.role}
                        </h3>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: 'rgba(0, 242, 254, 0.1)',
                            border: '1px solid rgba(0, 242, 254, 0.25)',
                            color: '#00f2fe',
                            fontSize: '11.5px',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontFamily: "'JetBrains Mono', monospace",
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <Calendar size={11} /> {item.duration}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '8px',
                          color: '#cbd5e1',
                          fontSize: '13px',
                          marginBottom: '12px'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: '#9d4edd' }}>{item.company}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
                          <MapPin size={12} /> {item.location}
                        </span>
                      </div>

                      <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '14px' }}>
                        {item.description}
                      </p>

                      {/* Highlights tags */}
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {item.highlights?.map((hl, i) => (
                          <span
                            key={i}
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              color: '#e2e8f0',
                              fontSize: '11.5px',
                              padding: '3px 8px',
                              borderRadius: '6px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                          >
                            <CheckCircle2 size={11} color="#00f2fe" /> {hl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              : QUALIFICATIONS.education.map((item, index) => (
                  <div key={index} className="timeline-item" style={{ display: 'flex', position: 'relative' }}>
                    {/* Glowing Node */}
                    <div
                      className="timeline-node"
                      style={{
                        borderRadius: '50%',
                        backgroundColor: '#0c0f22',
                        border: '2.5px solid #00f2fe',
                        boxShadow: '0 0 15px rgba(0, 242, 254, 0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 2
                      }}
                    >
                      <GraduationCap size={17} color="#9d4edd" />
                    </div>

                    {/* Card Content */}
                    <div
                      className="glass-panel"
                      style={{
                        flexGrow: 1,
                        padding: '20px 18px',
                        borderRadius: '16px',
                        minWidth: 0
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          flexWrap: 'wrap',
                          gap: '6px 12px',
                          marginBottom: '8px'
                        }}
                      >
                        <h3
                          style={{
                            fontSize: 'clamp(16px, 2.5vw, 19px)',
                            fontWeight: 700,
                            color: '#f8fafc',
                            minWidth: 0
                          }}
                        >
                          {item.degree}
                        </h3>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '5px',
                            backgroundColor: 'rgba(157, 78, 221, 0.1)',
                            border: '1px solid rgba(157, 78, 221, 0.25)',
                            color: '#9d4edd',
                            fontSize: '11.5px',
                            padding: '2px 8px',
                            borderRadius: '9999px',
                            fontFamily: "'JetBrains Mono', monospace",
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <Calendar size={11} /> {item.duration}
                        </div>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '8px',
                          color: '#cbd5e1',
                          fontSize: '13px',
                          marginBottom: '12px'
                        }}
                      >
                        <span style={{ fontWeight: 600, color: '#00f2fe' }}>{item.institution}</span>
                        <span>•</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#94a3b8' }}>
                          <MapPin size={12} /> {item.location}
                        </span>
                      </div>

                      <p style={{ color: '#94a3b8', fontSize: '13.5px', lineHeight: '1.6', marginBottom: '12px' }}>
                        {item.description}
                      </p>

                      <div
                        style={{
                          display: 'inline-block',
                          backgroundColor: 'rgba(0, 242, 254, 0.08)',
                          border: '1px solid rgba(0, 242, 254, 0.2)',
                          color: '#00f2fe',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          fontSize: '12px',
                          fontWeight: 600
                        }}
                      >
                        🏅 {item.grade}
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline-central-line {
          left: 24px;
        }
        .timeline-item {
          gap: 24px;
        }
        .timeline-node {
          width: 48px;
          height: 48px;
        }
        @media (max-width: 640px) {
          .timeline-central-line {
            left: 17px;
          }
          .timeline-item {
            gap: 14px;
          }
          .timeline-node {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
}
