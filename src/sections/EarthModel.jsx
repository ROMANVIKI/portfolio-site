import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Earth GLB component
function EarthGLB({ animationSpeed = 2, autoRotate = true }) {
  const meshRef = useRef();
  
  // Load the GLB model
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
  
  return (
    <group ref={meshRef} position={[0, 0, 0]}>
      <primitive object={clonedScene} />
    </group>
  );
}

// Fallback Earth component (in case GLB fails to load)
function FallbackEarth({ animationSpeed = 2, autoRotate = true }) {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1 * animationSpeed;
    }
  });
  
  return (
    <group>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial color="#4A90E2" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.1, 32, 32]} />
        <meshStandardMaterial 
          color="#93cfef" 
          transparent 
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
        hasModel: !!scene
      });
    } catch (error) {
      console.error('Error loading GLB model:', error);
      setModelInfo({ error: error.message });
    }
  }, []);
  
  return (
    <div className='h-full w-full relative'>
      <Canvas className='w-full mt-4 h-full' camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 3, -5]} intensity={7} color={0xffffff} castShadow />
        <pointLight position={[5, 3, -5]} intensity={0.3} color={0x4444ff} />
        
        <EarthWithFallback 
          animationSpeed={animationSpeed} 
          autoRotate={autoRotate} 
        />
        
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          autoRotate={autoRotate}
          autoRotateSpeed={0.1}
          minDistance={3}
          maxDistance={15}
        />
      </Canvas>
      
    </div>
  );
}

// Preload the GLB model
useGLTF.preload('/models/monde.glb');
