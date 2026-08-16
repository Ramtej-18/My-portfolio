import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StarsCanvas from './components/3d/StarsCanvas';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Qualifications from './components/sections/Qualifications';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

export default function App() {
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Synthesize subtle futuristic audio beep on interaction
  const playAudio = () => {
    if (!soundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08); // A5

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.warn('Audio playback not supported:', e);
    }
  };

  const cursorRef = React.useRef(null);

  // Follow cursor directly via DOM to prevent re-rendering root component on every mouse move
  useEffect(() => {
    let animationFrameId = null;
    const handleMouseMove = (e) => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${e.clientX - 10}px, ${e.clientY - 10}px, 0)`;
        }
      });
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white relative cyber-grid-bg">
      {/* Dynamic Cursor Light */}
      <div
        ref={cursorRef}
        className="custom-cursor hidden md:block"
        style={{
          top: 0,
          left: 0,
          willChange: 'transform'
        }}
      />

      {/* 3D Dynamic Starfield Background Canvas */}
      <StarsCanvas />

      {/* Navigation Header */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        playAudio={playAudio}
      />

      {/* Main Content Sections */}
      <main>
        <Hero playAudio={playAudio} />
        <About />
        <Qualifications />
        <Skills />
        <Projects playAudio={playAudio} />
        <Contact playAudio={playAudio} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
