import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

function Orb() {
  const mesh = useRef(null);

  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.x += delta * 0.15;
    mesh.current.rotation.y += delta * 0.25;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[1.4, 1]} />
      <meshStandardMaterial color="#7c6bff" wireframe emissive="#73f7ff" emissiveIntensity={0.4} />
    </mesh>
  );
}

export default function HeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div className="glass-card flex h-full w-full items-center justify-center">
        <div className="h-40 w-40 rounded-full border border-white/20 bg-gradient-to-br from-aurora/30 to-neon/30" />
      </div>
    );
  }

  return (
    <div className="glass-card h-full w-full">
      <Canvas className="h-full w-full" dpr={[1, 1.5]} camera={{ position: [0, 0, 3.2], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[2, 2, 2]} intensity={1} />
        <Orb />
      </Canvas>
    </div>
  );
}
