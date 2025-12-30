import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticlePoints() {
  const ref = useRef<THREE.Points>(null);
  
  const particles = useMemo(() => {
    const positions = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      wireframeRef.current.rotation.y -= 0.003;
      wireframeRef.current.rotation.z += 0.002;
    }
  });

  return (
    <>
      <mesh ref={meshRef} position={[3, 0, -2]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.3} />
      </mesh>
      <mesh ref={wireframeRef} position={[-3, 1, -3]}>
        <octahedronGeometry args={[0.8, 0]} />
        <meshBasicMaterial color="#00ffff" wireframe transparent opacity={0.2} />
      </mesh>
    </>
  );
}

const ParticleField = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticlePoints />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default ParticleField;
