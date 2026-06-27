import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF, Environment } from '@react-three/drei';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error loading 3D model:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function ProceduralCrystal({ color = '#c9a84c' }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 1.2) * 0.15;
    }
  });

  return (
    <group ref={meshRef}>
      {/* Outer Crystalline Structure */}
      <mesh>
        <octahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color={color}
          roughness={0.05}
          metalness={0.95}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Wireframe Glow Shell */}
      <mesh scale={[1.28, 1.28, 1.28]}>
        <octahedronGeometry args={[1.2, 0]} />
        <meshBasicMaterial
          color="#e8c96a"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>

      {/* Center Core */}
      <mesh scale={[0.35, 0.35, 0.35]}>
        <dodecahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#ffffff" />
      </mesh>
    </group>
  );
}

// Safe GLTF loader — requires modelUrl to be a valid path
function GltfModel({ url, transform }) {
  const { scene } = useGLTF(url);
  
  const scale = transform?.scale || [1, 1, 1];
  const position = transform?.position || [0, 0, 0];
  const rotation = transform?.rotation || [0, 0, 0];

  return (
    <primitive 
      object={scene} 
      scale={scale} 
      position={position} 
      rotation={rotation} 
      dispose={null} 
    />
  );
}

function SceneContent({ modelUrl, color, transform }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <pointLight position={[-8, -8, -5]} intensity={1.2} color={color} />
      <pointLight position={[0, 6, 0]} intensity={0.5} color="#c9a84c" />

      <ErrorBoundary fallback={<ProceduralCrystal color={color} />}>
        <Suspense fallback={<ProceduralCrystal color={color} />}>
          {modelUrl ? (
            <group>
              <GltfModel url={modelUrl} transform={transform} />
            </group>
          ) : (
            <ProceduralCrystal color={color} />
          )}
        </Suspense>
      </ErrorBoundary>

      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={2}
        maxDistance={10}
        autoRotate={false}
      />
    </>
  );
}

export default function ModelViewer({ modelUrl, name = '', transform }) {
  // Assign accent color flavor per model
  let color = '#c9a84c';
  if (name.toLowerCase().includes('crystal')) color = '#a259ff';
  if (name.toLowerCase().includes('lantern')) color = '#4fc3f7';
  if (name.toLowerCase().includes('rune')) color = '#c9a84c';

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true }}
        style={{ background: 'transparent' }}
      >
        <SceneContent modelUrl={modelUrl} color={color} transform={transform} />
      </Canvas>
    </div>
  );
}
