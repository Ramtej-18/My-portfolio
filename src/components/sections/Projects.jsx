import React, { useState } from 'react';
import { PROJECTS } from '../../constants';
import TiltCard from '../ui/TiltCard';
import ProjectModal from '../ui/ProjectModal';
import { FolderGit2, ExternalLink, Info } from 'lucide-react';
import { GithubIcon } from '../ui/Icons';

export default function Projects({ playAudio }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenModal = (proj) => {
    if (playAudio) playAudio();
    setSelectedProject(proj);
  };

  return (
    <section id="projects" style={{ position: 'relative', paddingTop: '100px', paddingBottom: '80px' }}>
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
            <FolderGit2 size={14} /> My Creative Portfolio
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#f8fafc', marginBottom: '16px' }}>
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto', color: '#94a3b8', fontSize: '15px' }}>
            A showcase of real-world full-stack architectures, interactive 3D web applications, and high-performance software.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '50px' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (playAudio) playAudio();
                setActiveCategory(cat);
              }}
              style={{
                padding: '8px 20px',
                borderRadius: '9999px',
                border: activeCategory === cat ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: activeCategory === cat ? 'rgba(0, 242, 254, 0.15)' : 'rgba(13, 17, 35, 0.6)',
                color: activeCategory === cat ? '#00f2fe' : '#94a3b8',
                fontWeight: 600,
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat ? '0 0 15px rgba(0, 242, 254, 0.3)' : 'none'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '30px'
        }}>
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={10}>
              <div
                className="glass-panel"
                style={{
                  borderRadius: '20px',
                  overflow: 'hidden',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                {/* Thumbnail Image with Live Overlay */}
                <div style={{ position: 'relative', height: '210px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(6, 8, 19, 0.8)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    color: '#00f2fe',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.5px'
                  }}>
                    {project.category}
                  </div>

                  {/* Fast Action Buttons in Image */}
                  <div style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    display: 'flex',
                    gap: '8px'
                  }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(6, 8, 19, 0.8)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(0, 242, 254, 0.85)',
                        border: '1px solid #00f2fe',
                        color: '#060813',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                      title="Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                {/* Content Details */}
                <div style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>
                    {project.title}
                  </h3>
                  <p style={{ color: '#94a3b8', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' }}>
                    {project.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          color: '#cbd5e1',
                          fontSize: '12px',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontFamily: "'JetBrains Mono', monospace"
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Open Details Button */}
                  <button
                    onClick={() => handleOpenModal(project)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(0, 242, 254, 0.08)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      color: '#00f2fe',
                      fontWeight: 600,
                      fontSize: '13px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.08)';
                    }}
                  >
                    <Info size={15} /> View Project Architecture & Features
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Detail Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}
