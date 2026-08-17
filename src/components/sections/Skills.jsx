import React from 'react';
import { SKILL_CATEGORIES, FLOATING_3D_SKILLS } from '../../constants';
import FloatingTechBall from '../3d/FloatingTechBall';
import { Cpu, Code, Layers } from 'lucide-react';

export default function Skills() {
  return (
    <section id="skills" style={{ position: 'relative', paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
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
            <Cpu size={14} /> Technical Arsenal
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '16px' }}>
            Skills & <span className="gradient-text-cyan">Technologies</span>
          </h2>
          {/* <p style={{ maxWidth: '640px', margin: '0 auto', color: '#94a3b8', fontSize: '15px' }}>
            Interact with the 3D physics spheres below and explore full-stack mastery across modern web ecosystems.
          </p> */}
        </div>

        {/* 3D Floating Interactive Balls Section */}
        <div
          className="glass-panel"
          style={{
            borderRadius: '24px',
            padding: '30px 20px',
            marginBottom: '60px',
            background: 'rgba(10, 14, 30, 0.6)'
          }}
        >
          <div style={{
            textAlign: 'center',
            marginBottom: '24px',
            fontSize: '13px',
            color: '#00f2fe',
            fontFamily: "'JetBrains Mono', monospace"
          }}>
            {/* ⚡ 3D INTERACTIVE TECH SPHERES (HOVER & DRAG) */}
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '24px'
          }}>
            {FLOATING_3D_SKILLS.map((skill, index) => (
              <FloatingTechBall key={index} skill={skill} />
            ))}
          </div>
        </div>

        {/* Categorized Progress Bars */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                padding: '32px 28px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(0, 242, 254, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {idx === 0 ? <Code size={20} color="#00f2fe" /> : <Layers size={20} color="#9d4edd" />}
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc' }}>
                  {cat.category}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '14px' }}>
                      <span style={{ color: '#e2e8f0', fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ color: skill.color || '#00f2fe', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Track */}
                    <div style={{
                      width: '100%',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      overflow: 'hidden',
                      position: 'relative'
                    }}>
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          borderRadius: '4px',
                          background: `linear-gradient(90deg, #00f2fe 0%, ${skill.color || '#9d4edd'} 100%)`,
                          boxShadow: `0 0 10px ${skill.color || '#00f2fe'}`,
                          transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
