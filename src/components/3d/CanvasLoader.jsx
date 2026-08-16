import React from 'react';
import { Html, useProgress } from '@react-three/drei';

export default function CanvasLoader() {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        pointerEvents: 'none'
      }}
    >
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        border: '3px solid rgba(0, 242, 254, 0.2)',
        borderTopColor: '#00f2fe',
        animation: 'spinSlow 1s linear infinite'
      }} />
      <p
        style={{
          fontSize: '13px',
          color: '#00f2fe',
          fontWeight: 700,
          marginTop: 12,
          letterSpacing: '1px',
          fontFamily: "'JetBrains Mono', monospace"
        }}
      >
        {progress !== 0 ? `${progress.toFixed(0)}% LOADED` : 'INITIALIZING 3D...'}
      </p>
    </Html>
  );
}
