import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF, PresentationControls, Box } from '@react-three/drei';

interface ProductViewerProps {
  modelPath: string;
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
  autoRotate?: boolean;
  className?: string;
}

const FallbackBox = ({ scale = 1, position = [0, 0, 0], rotation = [0, 0, 0], autoRotate = true }) => {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;

    if (autoRotate) {
      ref.current.rotation.y += delta * 0.3;
    }

    // Unicorn-like floating animation
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
    
    if (hovered) {
      // Smooth follow mouse movement
      ref.current.rotation.x = mousePosition.y * 0.5;
      ref.current.rotation.y += (mousePosition.x * 0.5 - ref.current.rotation.y) * 0.1;
      
      // Rainbow color animation
      const hue = ((state.clock.elapsedTime * 50) % 360) / 360;
      const color = `hsl(${hue * 360}, 70%, 70%)`;
      ref.current.material.color.setStyle(color);
    }
  });

  return (
    <Box 
      ref={ref}
      args={[1, 1, 1]} 
      scale={scale} 
      position={position} 
      rotation={rotation}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial 
        color="#4f46e5"
        metalness={0.6}
        roughness={0.2}
      />
    </Box>
  );
};

const Model = ({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  autoRotate = true
}) => {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  try {
    const { scene } = useGLTF(modelPath);

    useFrame((state, delta) => {
      if (!ref.current) return;

      if (autoRotate) {
        ref.current.rotation.y += delta * 0.3;
      }

      // Unicorn-like floating animation
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      if (hovered) {
        // Smooth follow mouse movement
        ref.current.rotation.x = mousePosition.y * 0.5;
        ref.current.rotation.y += (mousePosition.x * 0.5 - ref.current.rotation.y) * 0.1;
        
        // Add slight tilt based on mouse position
        ref.current.rotation.z = mousePosition.x * 0.1;
      }
    });

    return (
      <primitive
        ref={ref}
        object={scene}
        scale={scale}
        position={position}
        rotation={rotation}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      />
    );
  } catch (error) {
    console.warn('Failed to load 3D model, falling back to default box', error);
    return (
      <FallbackBox
        scale={scale}
        position={position}
        rotation={rotation}
        autoRotate={autoRotate}
      />
    );
  }
};

const ProductViewer: React.FC<ProductViewerProps> = ({
  modelPath,
  scale = 1,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
  autoRotate = true,
  className = ""
}) => {
  return (
    <div className={`canvas-container ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />
          
          <PresentationControls
            global
            snap
            rotation={[0, -Math.PI / 4, 0]}
            polar={[-Math.PI / 4, Math.PI / 4]}
            azimuth={[-Math.PI / 4, Math.PI / 4]}
          >
            <Model
              modelPath={modelPath}
              scale={scale}
              position={position}
              rotation={rotation}
              autoRotate={autoRotate}
            />
          </PresentationControls>
          
          <Environment preset="city" />
          <OrbitControls enableZoom={true} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ProductViewer;