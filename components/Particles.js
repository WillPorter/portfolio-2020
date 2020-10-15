import React from 'react';
import ParticleField from 'react-particles-webgl';

/**
 * The default configuation for the ParticleField component
 *
 * Any option passed in via props will overwrite the default config
 */
const config = {
    showCube: false,
    dimension: '3D',
    velocity: 2,
    boundaryType: 'bounce',
    antialias: false,
    direction: {
      xMin: -1,
      xMax: 1,
      yMin: -1,
      yMax: 1,
      zMin: -1,
      zMax: 1
    },
    lines: {
      colorMode: 'rainbow',
      color: '#0f054f',
      transparency: 0.9,
      limitConnections: true,
      maxConnections: 20,
      minDistance: 300,
      visible: true
    },
    particles: {
      colorMode: 'rainbow',
      color: '#3FB568',
      transparency: 1,
      shape: 'circle',
      boundingBox: 'canvas',
      count: 1004,
      minSize: 10,
      maxSize: 5,
      visible: true
    },
    cameraControls: {
      enabled: false,
      enableDamping: true,
      dampingFactor: 0.2,
      enableZoom: true,
      autoRotate: true,
      autoRotateSpeed: 0.3,
      resetCameraFlag: false
    },
    limitConnections: false
  }
  const Particles = () => (
    <div style={{ height: "100vh", width: "100%", position: "fixed", zIndex:-2 }}>
        <ParticleField config={config} />
    </div>
  );

export default Particles;