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
    <section
      id="projects"
      style={{
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '60px'
      }}
    >
      <div className="container-custom">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
            <FolderGit2 size={14} /> My Creative Portfolio
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
            Featured <span className="gradient-text-cyan">Projects</span>
          </h2>
          <p
            style={{
              maxWidth: '600px',
              margin: '0 auto',
              color: '#94a3b8',
              fontSize: 'clamp(0.9rem, 1.5vw, 1rem)'
            }}
          >
            A showcase of real-world full-stack architectures, interactive web applications, and high-performance software.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '40px'
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                if (playAudio) playAudio();
                setActiveCategory(cat);
              }}
              style={{
                padding: '7px 18px',
                borderRadius: '9999px',
                border: activeCategory === cat ? '1px solid #00f2fe' : '1px solid rgba(255, 255, 255, 0.1)',
                backgroundColor: activeCategory === cat ? 'rgba(0, 242, 254, 0.15)' : 'rgba(13, 17, 35, 0.6)',
                color: activeCategory === cat ? '#00f2fe' : '#94a3b8',
                fontWeight: 600,
                fontSize: '13.5px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeCategory === cat ? '0 0 15px rgba(0, 242, 254, 0.3)' : 'none',
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid with 3D Tilt */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '24px'
          }}
        >
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} maxTilt={8}>
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
                <div style={{ position: 'relative', height: '190px', overflow: 'hidden' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.4s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.06)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      backgroundColor: 'rgba(6, 8, 19, 0.85)',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      color: '#00f2fe',
                      padding: '3px 10px',
                      borderRadius: '9999px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '0.5px'
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Fast Action Buttons in Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      display: 'flex',
                      gap: '8px'
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Github Repository"
                      style={{
                        width: '34px',
                        height: '34px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(6, 8, 19, 0.85)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        color: '#fff',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none'
                      }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={15} />
                    </a>
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo.startsWith('http') ? project.liveDemo : `https://${project.liveDemo}`}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="View Live Demo"
                        style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(0, 242, 254, 0.9)',
                          border: '1px solid #00f2fe',
                          color: '#060813',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          textDecoration: 'none'
                        }}
                        title="Live Demo"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Details */}
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: '#94a3b8', fontSize: '13px', lineHeight: '1.6', marginBottom: '16px' }}>
                      {project.shortDesc}
                    </p>
                  </div>

                  <div>
                    {/* Tech Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            color: '#cbd5e1',
                            fontSize: '11px',
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
                        transition: 'all 0.2s ease',
                        fontFamily: "'Space Grotesk', sans-serif"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 242, 254, 0.08)';
                      }}
                    >
                      <Info size={15} /> Architecture & Details
                    </button>
                  </div>
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
