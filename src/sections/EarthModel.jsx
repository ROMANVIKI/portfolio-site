import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Earth component
function Earth({ animationSpeed = 2, autoRotate = true }) {
  const meshRef = useRef();
  const cloudsRef = useRef();
  const atmosphereRef = useRef();

  // Load textures
  const [earthTexture, bumpTexture, cloudsTexture, nightTexture, oceanMaskTexture] = useLoader(
    THREE.TextureLoader,
    [
      '/textures/earth albedo.jpg',
      '/textures/earth bump.jpg',
      '/textures/clouds earth.png',
      '/textures/earth night_lights_modified.png',
      '/textures/earth land ocean mask.png',
    ]
  );

  // GSAP animations
  useEffect(() => {
    if (window.gsap && meshRef.current) {
      window.gsap.from(meshRef.current.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 2,
        ease: 'back.out(1.7)',
      });

      window.gsap.to(meshRef.current.position, {
        y: 0.2,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: 'power2.inOut',
      });
    }
  }, []);

  // Frame-based animations
  useFrame((state, delta) => {
    if (autoRotate) {
      if (meshRef.current) {
        meshRef.current.rotation.y += delta * 0.1 * animationSpeed;
      }
      if (cloudsRef.current) {
        cloudsRef.current.rotation.y += delta * 0.12 * animationSpeed;
      }
    }

    if (atmosphereRef.current) {
      atmosphereRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpTexture}
          bumpScale={0.1}
          specularMap={oceanMaskTexture}
          specular={new THREE.Color(0x222222)}
          shininess={100}
        />
      </mesh>

      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.01, 64, 64]} />
        <meshPhongMaterial
          map={cloudsTexture}
          transparent={true}
          opacity={0.6}
          depthWrite={false}
        />
      </mesh>

      <mesh ref={atmosphereRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.1, 64, 64]} />
        <meshPhongMaterial
          color={0x93cfef}
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}

// Loading component
function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color='#4A90E2' wireframe />
    </mesh>
  );
}

// Earth Model Component
export default function EarthModel() {
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);

  return (
    <div className='h-full w-full relative'>
      <Canvas className='w-full h-full' camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 3, -5]} intensity={7} color={0xffffff} castShadow />
        <pointLight position={[5, 3, -5]} intensity={0.3} color={0x4444ff} />

        <Suspense fallback={<Loader />}>
          <Earth animationSpeed={animationSpeed} autoRotate={autoRotate} />
        </Suspense>

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={autoRotate}
          autoRotateSpeed={0.5}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
    </div>
  );
}
