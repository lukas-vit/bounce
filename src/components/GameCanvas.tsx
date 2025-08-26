import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PingPongGame from "./PingPongGame";

export default function GameCanvas() {
  return (
    <div className="w-full h-screen">
      <Canvas
        camera={{ position: [0, 8, 12], fov: 60 }}
        shadows
        gl={{ antialias: true }}
      >
        {/* Lighting setup for our 3D scene */}
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />

        {/* Our main game scene */}
        <PingPongGame />

        {/* Camera controls for development/debugging */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}
