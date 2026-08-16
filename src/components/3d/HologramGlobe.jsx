import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';

function GlobeMesh() {
  const globeRef = useRef();
  const ringRef = useRef();
  const satelliteRef = useRef();

  useFrame((state, delta) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += delta * 0.25;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z -= delta * 0.3;
      ringRef.current.rotation.x += delta * 0.15;
    }
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y += delta * 0.8;
    }
  });

  return (
    <group>
      {/* Inner Sphere with Neon Grid */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[1.2, 24, 24]} />
        <meshStandardMaterial
          color="#090d1f"
          wireframe
          emissive="#00f2fe"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Core Glow */}
      <mesh>
        <sphereGeometry args={[1.05, 16, 16]} />
        <meshBasicMaterial color="#9d4edd" transparent opacity={0.18} />
      </mesh>

      {/* Holographic Equatorial Ring */}
      <mesh ref={ringRef} rotation={[0.6, 0.4, 0]}>
        <torusGeometry args={[1.6, 0.015, 16, 64]} />
        <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={3} />
      </mesh>

      {/* Orbiting Tech Satellites */}
      <group ref={satelliteRef}>
        <mesh position={[1.8, 0.4, 0]}>
          <octahedronGeometry args={[0.08]} />
          <meshStandardMaterial color="#f72585" emissive="#f72585" emissiveIntensity={4} />
        </mesh>
        <mesh position={[-1.7, -0.3, 0]}>
          <octahedronGeometry args={[0.07]} />
          <meshStandardMaterial color="#00f2fe" emissive="#00f2fe" emissiveIntensity={4} />
        </mesh>
      </group>
    </group>
  );
}

export default function HologramGlobe() {
  return (
    <div style={{ width: '100%', height: '360px', position: 'relative' }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3.8], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} color="#00f2fe" intensity={2} />
        <pointLight position={[-5, -5, -3]} color="#9d4edd" intensity={2} />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
          <GlobeMesh />
        </Float>
        <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
