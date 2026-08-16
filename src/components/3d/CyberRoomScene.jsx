import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Dynamic Screen Canvas Texture (Optimized to render on change, zero frame bus spam)
function ScreenCanvas({ rgbColor }) {
  const canvasRef = useRef(document.createElement('canvas'));
  const textureRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    // Background VS Code Cyber Theme
    ctx.fillStyle = '#0d1117';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Top Window Bar
    ctx.fillStyle = '#161b22';
    ctx.fillRect(0, 0, canvas.width, 22);

    // Window control buttons
    ctx.fillStyle = '#ff5f56';
    ctx.beginPath();
    ctx.arc(12, 11, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#ffbd2e';
    ctx.beginPath();
    ctx.arc(24, 11, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#27c93f';
    ctx.beginPath();
    ctx.arc(36, 11, 4, 0, Math.PI * 2);
    ctx.fill();

    // Active tab
    ctx.fillStyle = '#1f242c';
    ctx.fillRect(50, 4, 130, 18);
    ctx.fillStyle = rgbColor;
    ctx.font = 'bold 10px monospace';
    ctx.fillText('⚡ Developer.jsx', 65, 16);

    // Left Sidebar Line Numbers
    ctx.fillStyle = '#30363d';
    ctx.fillRect(0, 22, 28, canvas.height - 22);

    ctx.fillStyle = '#484f58';
    ctx.font = '9px monospace';
    for (let i = 1; i <= 10; i++) {
      ctx.fillText(`${i}`, 8, 38 + i * 18);
    }

    // Code lines with syntax glow
    const lines = [
      { text: '// Welcome to Ramtej\'s 3D Workstation', color: '#6e7681' },
      { text: 'import React from "react";', color: '#ff7b72' },
      { text: 'import { ThreeCanvas } from "@portfolio/3d";', color: '#79c0ff' },
      { text: 'export default function Portfolio() {', color: '#d2a8ff' },
      { text: '  const stack = ["React", "Three.js", "MERN"];', color: '#a5d6ff' },
      { text: '  const readyToBuild = true;', color: '#7ee787' },
      { text: '  return <FullStackExperience user="Ramtej" />;', color: '#79c0ff' },
      { text: '}', color: '#d2a8ff' },
      { text: '// Status: 60+ FPS Supercharged ⚡', color: rgbColor }
    ];

    lines.forEach((line, index) => {
      if (line.text) {
        ctx.fillStyle = line.color;
        ctx.font = '10px monospace';
        ctx.fillText(line.text, 36, 44 + index * 19);
      }
    });

    // Bottom Status Bar
    ctx.fillStyle = '#161b22';
    ctx.fillRect(0, canvas.height - 18, canvas.width, 18);
    ctx.fillStyle = '#58a6ff';
    ctx.font = '8px monospace';
    ctx.fillText('⚡ UTF-8   |   JavaScript JSX   |   Prettier: Active', 10, canvas.height - 6);

    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }, [rgbColor]);

  return (
    <canvasTexture
      ref={textureRef}
      attach="map"
      image={canvasRef.current}
      generateMipmaps={false}
      minFilter={THREE.LinearFilter}
    />
  );
}

// 3D Animated Workstation Mesh
function WorkstationScene({ rgbColor }) {
  const fanRef1 = useRef();
  const fanRef2 = useRef();
  const fanRef3 = useRef();

  useFrame((state, delta) => {
    if (fanRef1.current) fanRef1.current.rotation.z += delta * 12;
    if (fanRef2.current) fanRef2.current.rotation.z += delta * 12;
    if (fanRef3.current) fanRef3.current.rotation.z += delta * 12;
  });

  return (
    <group position={[0, -0.7, 0]} rotation={[0.08, -0.25, 0]}>
      {/* 1. Wooden/Metallic Desk Top */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[4.2, 0.12, 2.0]} />
        <meshStandardMaterial color="#0c0e17" roughness={0.2} metalness={0.8} />
      </mesh>

      {/* Desk Glowing RGB Border Trim */}
      <mesh position={[0, -0.04, 1.01]}>
        <boxGeometry args={[4.22, 0.03, 0.02]} />
        <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={2.5} />
      </mesh>

      {/* Desk Legs */}
      <mesh position={[-1.9, -0.8, -0.7]}>
        <boxGeometry args={[0.08, 1.5, 0.08]} />
        <meshStandardMaterial color="#1f242d" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[1.9, -0.8, -0.7]}>
        <boxGeometry args={[0.08, 1.5, 0.08]} />
        <meshStandardMaterial color="#1f242d" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[-1.9, -0.8, 0.7]}>
        <boxGeometry args={[0.08, 1.5, 0.08]} />
        <meshStandardMaterial color="#1f242d" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[1.9, -0.8, 0.7]}>
        <boxGeometry args={[0.08, 1.5, 0.08]} />
        <meshStandardMaterial color="#1f242d" metalness={0.9} roughness={0.3} />
      </mesh>

      {/* 2. Large Curved Gaming Monitor */}
      <group position={[0, 0.75, -0.2]}>
        {/* Monitor Bezel */}
        <mesh castShadow>
          <boxGeometry args={[2.5, 1.3, 0.06]} />
          <meshStandardMaterial color="#11141c" roughness={0.4} metalness={0.8} />
        </mesh>
        {/* Monitor Screen Surface */}
        <mesh position={[0, 0, 0.032]}>
          <planeGeometry args={[2.42, 1.22]} />
          <meshBasicMaterial toneMapped={false}>
            <ScreenCanvas rgbColor={rgbColor} />
          </meshBasicMaterial>
        </mesh>
        {/* Monitor Stand Arm */}
        <mesh position={[0, -0.5, -0.15]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.1, 0.7, 0.06]} />
          <meshStandardMaterial color="#2d3748" metalness={0.9} roughness={0.2} />
        </mesh>
        {/* Monitor Base */}
        <mesh position={[0, -0.7, -0.1]}>
          <cylinderGeometry args={[0.28, 0.32, 0.03, 32]} />
          <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.3} />
        </mesh>
        {/* Monitor Back Ambient Glow */}
        <pointLight position={[0, 0, -0.3]} color={rgbColor} intensity={3} distance={2.5} />
      </group>

      {/* 3. RGB Gaming PC Tower (Right Side) */}
      <group position={[1.45, 0.65, 0.05]}>
        {/* Case Body */}
        <mesh castShadow>
          <boxGeometry args={[0.6, 1.15, 1.0]} />
          <meshStandardMaterial color="#0b0d14" metalness={0.85} roughness={0.25} />
        </mesh>

        {/* Glass Side Panel */}
        <mesh position={[-0.31, 0, 0]}>
          <boxGeometry args={[0.02, 1.1, 0.96]} />
          <meshPhysicalMaterial
            transparent
            opacity={0.35}
            roughness={0.1}
            transmission={0.9}
            thickness={0.05}
            color="#111"
          />
        </mesh>

        {/* Internal RGB Motherboard & Components */}
        <mesh position={[-0.2, 0.1, 0]}>
          <boxGeometry args={[0.05, 0.65, 0.65]} />
          <meshStandardMaterial color="#1a202c" />
        </mesh>
        {/* RAM RGB Sticks */}
        <mesh position={[-0.15, 0.18, 0.05]}>
          <boxGeometry args={[0.02, 0.15, 0.02]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={3} />
        </mesh>
        <mesh position={[-0.15, 0.18, 0.09]}>
          <boxGeometry args={[0.02, 0.15, 0.02]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={3} />
        </mesh>

        {/* Front RGB Dual Fans */}
        <group position={[0, 0.25, 0.51]}>
          <mesh ref={fanRef1}>
            <torusGeometry args={[0.14, 0.015, 16, 32]} />
            <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={3.5} />
          </mesh>
          <pointLight color={rgbColor} intensity={2} distance={1.2} />
        </group>

        <group position={[0, -0.22, 0.51]}>
          <mesh ref={fanRef2}>
            <torusGeometry args={[0.14, 0.015, 16, 32]} />
            <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={3.5} />
          </mesh>
          <pointLight color={rgbColor} intensity={2} distance={1.2} />
        </group>

        {/* Internal PC Glow */}
        <pointLight position={[-0.1, 0.1, 0]} color={rgbColor} intensity={4} distance={1.5} />
      </group>

      {/* 4. Left & Right Studio Speakers */}
      <group position={[-1.5, 0.35, -0.15]}>
        <mesh castShadow>
          <boxGeometry args={[0.26, 0.5, 0.3]} />
          <meshStandardMaterial color="#131722" roughness={0.3} metalness={0.7} />
        </mesh>
        {/* Woofer Glow Cone */}
        <mesh position={[0, -0.08, 0.155]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={2} />
        </mesh>
        {/* Tweeter */}
        <mesh position={[0, 0.12, 0.155]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 32]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      </group>

      <group position={[-1.5, 0.35, 0.55]}>
        {/* Optional Subwoofer or accessory */}
      </group>

      <group position={[0.95, 0.35, -0.15]}>
        <mesh castShadow>
          <boxGeometry args={[0.26, 0.5, 0.3]} />
          <meshStandardMaterial color="#131722" roughness={0.3} metalness={0.7} />
        </mesh>
        <mesh position={[0, -0.08, 0.155]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={2} />
        </mesh>
        <mesh position={[0, 0.12, 0.155]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.04, 0.04, 0.02, 32]} />
          <meshStandardMaterial color="#334155" />
        </mesh>
      </group>

      {/* 5. Cyber RGB Mousepad, Keyboard & Mouse */}
      <group position={[-0.1, 0.07, 0.35]}>
        {/* Extended Mousepad */}
        <mesh receiveShadow>
          <boxGeometry args={[1.7, 0.015, 0.7]} />
          <meshStandardMaterial color="#121624" roughness={0.8} />
        </mesh>
        {/* Mousepad Neon Edge */}
        <mesh position={[0, 0.005, 0]}>
          <boxGeometry args={[1.72, 0.01, 0.72]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={1.2} />
        </mesh>

        {/* Mechanical Keyboard */}
        <mesh position={[-0.25, 0.03, 0.05]} castShadow>
          <boxGeometry args={[0.9, 0.04, 0.32]} />
          <meshStandardMaterial color="#1e2433" metalness={0.7} roughness={0.3} />
        </mesh>
        {/* Glowing Keycaps Glow */}
        <mesh position={[-0.25, 0.055, 0.05]}>
          <boxGeometry args={[0.84, 0.015, 0.28]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={2} />
        </mesh>

        {/* Ergonomic Gaming Mouse */}
        <mesh position={[0.45, 0.04, 0.05]} castShadow>
          <boxGeometry args={[0.13, 0.05, 0.22]} />
          <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.2} />
        </mesh>
        {/* Mouse RGB Stripe */}
        <mesh position={[0.45, 0.065, 0.05]}>
          <boxGeometry args={[0.03, 0.01, 0.16]} />
          <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={3} />
        </mesh>
      </group>

      {/* Floating Cyber Hologram Ring */}
      <Float speed={2} rotationIntensity={0.6} floatIntensity={0.5}>
        <group position={[0, 1.9, -0.2]}>
          <mesh>
            <torusGeometry args={[0.5, 0.01, 16, 64]} />
            <meshStandardMaterial color={rgbColor} emissive={rgbColor} emissiveIntensity={2} />
          </mesh>
          <Text
            position={[0, 0, 0]}
            fontSize={0.12}
            color={rgbColor}
            anchorX="center"
            anchorY="middle"
            font="https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbY2o-flEEny0FZhsfKu5WU4zr3E_263g.woff2"
          >
            RAMTEJ // FULL-STACK
          </Text>
        </group>
      </Float>

      {/* Floor with Soft Cyber Glow */}
      <mesh position={[0, -1.55, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial
          color="#080b18"
          roughness={0.4}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
}

export default function CyberRoomScene() {
  const [rgbColor, setRgbColor] = useState('#00f2fe');

  const colorOptions = [
    { name: 'Cyan Neon', color: '#00f2fe' },
    { name: 'Purple Cyber', color: '#9d4edd' },
    { name: 'Emerald Wave', color: '#10b981' },
    { name: 'Solar Gold', color: '#ffb703' }
  ];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '480px' }}>
      {/* Interactive RGB Color Selector for the 3D Setup */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(13, 17, 35, 0.75)',
        backdropFilter: 'blur(12px)',
        padding: '6px 12px',
        borderRadius: '9999px',
        border: '1px solid rgba(0, 242, 254, 0.25)'
      }}>
        <span style={{ fontSize: '11px', color: '#94a3b8', fontFamily: "'JetBrains Mono', monospace" }}>
          RGB PRESET:
        </span>
        {colorOptions.map((opt) => (
          <button
            key={opt.color}
            onClick={() => setRgbColor(opt.color)}
            title={opt.name}
            style={{
              width: '18px',
              height: '18px',
              borderRadius: '50%',
              backgroundColor: opt.color,
              border: rgbColor === opt.color ? '2px solid #ffffff' : '1px solid transparent',
              cursor: 'pointer',
              boxShadow: rgbColor === opt.color ? `0 0 10px ${opt.color}` : 'none',
              transition: 'all 0.2s ease'
            }}
          />
        ))}
      </div>

      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 1.2, 3.8], fov: 45 }}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.2} />
        <pointLight position={[-4, 4, -2]} color="#9d4edd" intensity={1.5} />
        
        <WorkstationScene rgbColor={rgbColor} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.05}
          minPolarAngle={Math.PI / 3.5}
          minAzimuthAngle={-Math.PI / 4}
          maxAzimuthAngle={Math.PI / 4}
          autoRotate={false}
          dampingFactor={0.05}
          enableDamping
        />
      </Canvas>

      {/* 3D Interaction Hint */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '11px',
        color: '#64748b',
        fontFamily: "'JetBrains Mono', monospace",
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '6px'
      }}>
        <span>🕹️ Click & Drag to inspect 3D Workstation</span>
      </div>
    </div>
  );
}
