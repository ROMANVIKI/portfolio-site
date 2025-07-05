import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Hook to detect mobile screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
}

// Responsive camera component
function ResponsiveCamera() {
  const { camera, size } = useThree();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      // Mobile: wider FOV and further camera position
      camera.fov = 60;
      camera.position.set(0, 0, 8);
    } else {
      // Desktop: normal FOV and closer position
      camera.fov = 45;
      camera.position.set(0, 0, 8);
    }
    camera.updateProjectionMatrix();
  }, [camera, isMobile]);

  return null;
}

// Earth GLB component
function EarthGLB({ animationSpeed = 2, autoRotate = true }) {
  const meshRef = useRef();
  const isMobile = useIsMobile();

  // Load the GLB model (using a fallback path)
  const { scene, materials, nodes } = useGLTF('/models/monde.glb');

  // Clone the scene to avoid issues with multiple instances
  const clonedScene = scene.clone();

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
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1 * animationSpeed;
    }
  });

  // Optional: Enhance materials if needed
  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material) => {
        if (material.isMeshStandardMaterial || material.isMeshPhongMaterial) {
          // Enhance material properties
          material.metalness = 0.1;
          material.roughness = 0.8;
          material.needsUpdate = true;
        }
      });
    }
  }, [materials]);

  // Scale the model based on screen size
  const modelScale = isMobile ? 0.7 : 1;

  return (
    <group ref={meshRef} position={[0, 0, 0]} scale={[modelScale, modelScale, modelScale]}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Fallback Earth component (in case GLB fails to load)
function FallbackEarth({ animationSpeed = 2, autoRotate = true }) {
  const meshRef = useRef();
  const isMobile = useIsMobile();

  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1 * animationSpeed;
    }
  });

  // Scale based on screen size
  const modelScale = isMobile ? 0.7 : 1;
  const sphereSize = isMobile ? 1.5 : 2;

  return (
    <group scale={[modelScale, modelScale, modelScale]}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[sphereSize, 64, 64]} />
        <meshStandardMaterial color='#4A90E2' wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[sphereSize + 0.1, 32, 32]} />
        <meshStandardMaterial color='#93cfef' transparent opacity={0.1} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

// Loading component
function Loader() {
  const isMobile = useIsMobile();
  const sphereSize = isMobile ? 1.5 : 2;

  return (
    <mesh>
      <sphereGeometry args={[sphereSize, 32, 32]} />
      <meshStandardMaterial color='#4A90E2' wireframe />
    </mesh>
  );
}

// Error Boundary Component
function EarthWithFallback({ animationSpeed, autoRotate }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    console.warn('GLB model failed to load, using fallback Earth');
    return <FallbackEarth animationSpeed={animationSpeed} autoRotate={autoRotate} />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <EarthGLB
        animationSpeed={animationSpeed}
        autoRotate={autoRotate}
        onError={() => setHasError(true)}
      />
    </Suspense>
  );
}

// Main Earth Model Component
export default function EarthModel() {
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [autoRotate, setAutoRotate] = useState(true);
  const [modelInfo, setModelInfo] = useState(null);
  const isMobile = useIsMobile();

  // Debug info about the loaded model
  useEffect(() => {
    // This will run when the component mounts
    try {
      const { scene, materials, nodes } = useGLTF('/models/earth.glb');

      const materialNames = Object.keys(materials || {});
      const nodeNames = Object.keys(nodes || {});

      setModelInfo({
        materials: materialNames,
        nodes: nodeNames,
        hasModel: !!scene,
      });
    } catch (error) {
      console.error('Error loading GLB model:', error);
      setModelInfo({ error: error.message });
    }
  }, []);

  return (
    <div className='h-full w-full relative'>
      <Canvas
        className=''
        camera={{
          position: isMobile ? [0, 0, 12] : [0, 0, 8],
          fov: isMobile ? 60 : 45,
        }}
      >
        <ResponsiveCamera />

        <ambientLight intensity={2} />
        <directionalLight position={[5, 3, -5]} intensity={7} color={0xffffff} castShadow />
        <pointLight position={[5, 3, -5]} intensity={0.7} color={0x4444ff} />

        <EarthWithFallback animationSpeed={animationSpeed} autoRotate={autoRotate} />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={autoRotate}
          autoRotateSpeed={0.1}
          minDistance={isMobile ? 4 : 3}
          maxDistance={isMobile ? 20 : 15}
        />
      </Canvas>
    </div>
  );
}

// Preload the GLB model
useGLTF.preload('/models/monde.glb');
