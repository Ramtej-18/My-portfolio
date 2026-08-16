import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  // Efficient 1800 points for smooth performance
  const [sphere] = useState(() => random.inSphere(new Float32Array(1800), { radius: 1.3 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#00f2fe"
          size={0.0035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
}

function NebulaDust() {
  const ref = useRef();
  const [dust] = useState(() => random.inSphere(new Float32Array(800), { radius: 1.6 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 25;
      ref.current.rotation.y += delta / 35;
    }
  });

  return (
    <group rotation={[Math.PI / 3, 0, 0]}>
      <Points ref={ref} positions={dust} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#9d4edd"
          size={0.0045}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.65}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: -1,
      pointerEvents: 'none'
    }}>
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 1] }}
        gl={{ antialias: false, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Stars />
          <NebulaDust />
        </Suspense>
      </Canvas>
    </div>
  );
}
