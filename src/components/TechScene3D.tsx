import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial, Sphere, Box, Torus, Octahedron, Icosahedron } from '@react-three/drei';
import { useRef, useMemo, Suspense } from 'react';
import * as THREE from 'three';

// Circuit grid lines
const CircuitGrid = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  const lines = useMemo(() => {
    const positions: [number, number, number][][] = [];
    for (let i = 0; i < 20; i++) {
      const startX = (Math.random() - 0.5) * 10;
      const startZ = (Math.random() - 0.5) * 10;
      const endX = startX + (Math.random() - 0.5) * 4;
      const endZ = startZ + (Math.random() - 0.5) * 4;
      positions.push([
        [startX, -2, startZ],
        [endX, -2, endZ]
      ]);
    }
    return positions;
  }, []);

  return (
    <group ref={ref}>
      {lines.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line[0], ...line[1]])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#00d4ff" opacity={0.3} transparent />
        </line>
      ))}
    </group>
  );
};

// Floating data nodes
const DataNode = ({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.5;
      ref.current.rotation.x = state.clock.elapsedTime * 0.5;
      ref.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <octahedronGeometry args={[0.2]} />
      <meshStandardMaterial 
        color="#00d4ff" 
        emissive="#00d4ff" 
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
};

// Central spinning tech sphere
const TechSphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <MeshDistortMaterial
          color="#3366ff"
          emissive="#1a3399"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          distort={0.3}
          speed={2}
          wireframe
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[1.2, 2]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.3}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

// Orbiting elements
const OrbitingElement = ({ radius, speed, offset, shape }: { 
  radius: number; 
  speed: number; 
  offset: number;
  shape: 'box' | 'torus' | 'sphere';
}) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed + offset;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 2) * 0.5;
      ref.current.rotation.x = t;
      ref.current.rotation.y = t * 0.7;
    }
  });

  return (
    <mesh ref={ref}>
      {shape === 'box' && <boxGeometry args={[0.3, 0.3, 0.3]} />}
      {shape === 'torus' && <torusGeometry args={[0.2, 0.08, 8, 16]} />}
      {shape === 'sphere' && <sphereGeometry args={[0.15]} />}
      <MeshWobbleMaterial
        color="#00d4ff"
        emissive="#0066cc"
        emissiveIntensity={0.3}
        metalness={0.7}
        roughness={0.3}
        factor={0.4}
        speed={2}
      />
    </mesh>
  );
};

// Particle field
const ParticleField = () => {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500 * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 20;
      positions[i + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
      ref.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#00d4ff"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};

// Connection lines between nodes
const ConnectionLines = () => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const connections = useMemo(() => {
    const lines: [number, number, number][][] = [];
    const nodePositions = [
      [2, 1, 0],
      [-2, 1.5, 1],
      [1, -1, 2],
      [-1, 0.5, -2],
      [0, 2, 1],
    ];
    
    for (let i = 0; i < nodePositions.length; i++) {
      for (let j = i + 1; j < nodePositions.length; j++) {
        lines.push([
          nodePositions[i] as [number, number, number],
          nodePositions[j] as [number, number, number]
        ]);
      }
    }
    return lines;
  }, []);

  return (
    <group ref={ref}>
      {connections.map((line, i) => (
        <line key={i}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...line[0], ...line[1]])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#3366ff" opacity={0.2} transparent />
        </line>
      ))}
    </group>
  );
};

interface TechScene3DProps {
  className?: string;
  variant?: 'hero' | 'section' | 'background';
}

const TechScene3D = ({ className = '', variant = 'hero' }: TechScene3DProps) => {
  return (
    <div className={`${className}`} style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3366ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00d4ff" />
          <spotLight
            position={[0, 10, 0]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            color="#ffffff"
          />

          {variant === 'hero' && (
            <>
              <TechSphere />
              <OrbitingElement radius={3} speed={0.5} offset={0} shape="box" />
              <OrbitingElement radius={3.5} speed={0.3} offset={Math.PI} shape="torus" />
              <OrbitingElement radius={4} speed={0.4} offset={Math.PI / 2} shape="sphere" />
              <ParticleField />
              <ConnectionLines />
            </>
          )}

          {variant === 'section' && (
            <>
              <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
                <Icosahedron args={[1, 1]} position={[0, 0, 0]}>
                  <MeshDistortMaterial
                    color="#3366ff"
                    emissive="#1a3399"
                    emissiveIntensity={0.2}
                    metalness={0.8}
                    roughness={0.2}
                    distort={0.2}
                    speed={1.5}
                    wireframe
                  />
                </Icosahedron>
              </Float>
              <DataNode position={[2, 0, 1]} delay={0} />
              <DataNode position={[-2, 0.5, -1]} delay={1} />
              <DataNode position={[1, 1, -2]} delay={2} />
            </>
          )}

          {variant === 'background' && (
            <>
              <ParticleField />
              <Float speed={0.5} rotationIntensity={0.1} floatIntensity={0.2}>
                <Torus args={[2, 0.3, 8, 32]} position={[0, 0, -5]}>
                  <meshStandardMaterial
                    color="#3366ff"
                    emissive="#1a3399"
                    emissiveIntensity={0.1}
                    metalness={0.9}
                    roughness={0.2}
                    transparent
                    opacity={0.3}
                  />
                </Torus>
              </Float>
            </>
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default TechScene3D;
