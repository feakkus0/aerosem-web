'use client';
import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying float vDistance;
  
  // Pseudo-random function
  float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
  }

  void main() {
    vec3 pos = position;
    float wave1 = sin(pos.x * 2.0 + uTime * 0.5);
    float wave2 = cos(pos.y * 3.0 + uTime * 0.3);
    pos.z += (wave1 + wave2) * 0.2;
    float dist = distance(pos.xy, uMouse);
    float influence = 1.0 - smoothstep(0.0, 1.5, dist);
    pos.z += influence * 1.5;
    vDistance = influence;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Use GLSL random function instead of JS Math.random()
    // Smaller point size for "floating dust" look
    gl_PointSize = (random(pos.xy) * 1.5 + 0.5) * (10.0 / -mvPosition.z); 
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColorBase;
  uniform vec3 uColorAccent;
  varying float vDistance;
  void main() {
    float strength = distance(gl_PointCoord, vec2(0.5));
    if(strength > 0.5) discard;
    vec3 color = mix(uColorBase, uColorAccent, vDistance * 2.0);
    float alpha = 1.0 - (strength * 2.0);
    // Increased alpha for visibility on white background
    gl_FragColor = vec4(color, alpha * 1.0);
  }
`;

const Particles = () => {
  const mesh = useRef();
  const { viewport } = useThree();
  const count = 600;

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColorBase: { value: new THREE.Color('#E5E5E5') }, // Light Grey base
    uColorAccent: { value: new THREE.Color('#CC0000') }, // Aerosem Red accent
  }), []);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread particles across a wider area to ensure coverage
      positions.set([(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 2], i * 3);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    // Slower speed for "floating molecules" feel
    mesh.current.material.uniforms.uTime.value = state.clock.getElapsedTime() * 0.1;
    mesh.current.material.uniforms.uMouse.value.set((state.pointer.x * viewport.width) / 2, (state.pointer.y * viewport.height) / 2);
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particlesPosition} itemSize={3} />
      </bufferGeometry>
      {/* NormalBlending is crucial for visibility on light backgrounds */}
      <shaderMaterial depthWrite={false} blending={THREE.NormalBlending} uniforms={uniforms} vertexShader={vertexShader} fragmentShader={fragmentShader} />
    </points>
  );
};
export default Particles;
