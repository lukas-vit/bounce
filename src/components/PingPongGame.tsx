import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

export default function PingPongGame() {
  // Refs for our game objects
  const ballRef = useRef<THREE.Mesh>(null);
  const leftPaddleRef = useRef<THREE.Mesh>(null);
  const rightPaddleRef = useRef<THREE.Mesh>(null);

  // Game state
  const [ballVelocity, setBallVelocity] = useState(
    new THREE.Vector3(0.1, 0, 0.1)
  );
  const [ballPosition, setBallPosition] = useState(new THREE.Vector3(0, 1, 0));

  // Game loop - runs every frame
  useFrame((state, delta) => {
    if (ballRef.current) {
      // Update ball position based on velocity
      const newPosition = ballPosition
        .clone()
        .add(ballVelocity.clone().multiplyScalar(delta * 60));
      setBallPosition(newPosition);
      ballRef.current.position.copy(newPosition);

      // Basic collision detection with table boundaries
      if (Math.abs(newPosition.x) > 4) {
        // Ball hit left or right wall - reverse X velocity
        setBallVelocity((prev) => new THREE.Vector3(-prev.x, prev.y, prev.z));
      }

      if (Math.abs(newPosition.z) > 6) {
        // Ball hit front or back wall - reverse Z velocity
        setBallVelocity((prev) => new THREE.Vector3(prev.x, prev.y, -prev.z));
      }

      // Ball hit floor or ceiling
      if (newPosition.y < 0.5 || newPosition.y > 2) {
        setBallVelocity((prev) => new THREE.Vector3(prev.x, -prev.y, prev.z));
      }
    }
  });

  return (
    <group>
      {/* 3D Table Mesh */}
      <mesh position={[0, 0, 0]} receiveShadow>
        <boxGeometry args={[8, 0.2, 12]} />
        <meshStandardMaterial color="#2d5016" />
      </mesh>

      {/* Table surface with green felt texture */}
      <mesh position={[0, 0.1, 0]} receiveShadow>
        <boxGeometry args={[7.8, 0.05, 11.8]} />
        <meshStandardMaterial color="#4a7c59" />
      </mesh>

      {/* Center Net */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[0.1, 1, 12]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Net posts */}
      <mesh position={[0, 1, 6]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <mesh position={[0, 1, -6]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 0.5]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Ball - Sphere mesh with physics */}
      <mesh ref={ballRef} position={ballPosition} castShadow>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>

      {/* Left Paddle (Player) */}
      <mesh ref={leftPaddleRef} position={[-3.5, 1, 0]} castShadow>
        <boxGeometry args={[0.2, 1.5, 2]} />
        <meshStandardMaterial color="#ff6b6b" />
      </mesh>

      {/* Right Paddle (Opponent) */}
      <mesh ref={rightPaddleRef} position={[3.5, 1, 0]} castShadow>
        <boxGeometry args={[0.2, 1.5, 2]} />
        <meshStandardMaterial color="#4ecdc4" />
      </mesh>

      {/* Invisible Boundary Colliders */}
      {/* Left wall */}
      <mesh position={[-4, 2, 0]} visible={false}>
        <boxGeometry args={[0.1, 4, 12]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Right wall */}
      <mesh position={[4, 2, 0]} visible={false}>
        <boxGeometry args={[0.1, 4, 12]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Front wall */}
      <mesh position={[0, 2, 6]} visible={false}>
        <boxGeometry args={[8, 4, 0.1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Back wall */}
      <mesh position={[0, 2, -6]} visible={false}>
        <boxGeometry args={[8, 4, 0.1]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
    </group>
  );
}
