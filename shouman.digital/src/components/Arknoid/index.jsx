import React from 'react';
import {
  Canvas, useFrame, useThree,
} from '@react-three/fiber';
import {
  Physics, useSphere, useBox, usePlane,
} from '@react-three/cannon';

function Ball({ args = [0.5, 32, 32] }) {
  const { viewport } = useThree();
  const [ref, api] = useSphere(() => ({ args: 0.5, mass: 1 }));
  // Invisible plane, if hit it respawns the ball
  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0);
      api.velocity.set(0, 10, 0);
    },
  }));
  return (
    <mesh ref={ref}>
      <sphereGeometry args={args} />
      <meshStandardMaterial />
    </mesh>
  );
}

function Paddle({ args = [2, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args }));
  useFrame((state) => {
    api.position.set((state.mouse.x * state.viewport.width) / 2, -state.viewport.height / 2, 0);
    api.rotation.set(0, 0, (state.mouse.x * Math.PI) / 5);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

function Enemy({ args = [1.5, 0.5, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Walls({ args = [2, 0.5, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

export default function Arknoid() {
  return (
    <main className="arknoid-body">
      <div className="wrapper">
        <Canvas camera={{ position: [0, 5, 9], fov: 50 }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[9, 9, 5]} />
          <pointLight position={[-9, -9, -5]} />
          <Physics gravity={[0, -23, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
            <Ball />
            <Paddle />
            <Enemy color="#551ba3" position={[3, 1, 0]} />
            <Enemy color="#551ba3" position={[-3, 1, 0]} />
            <Enemy color="#751bf3" position={[4, 3, 0]} />
            <Enemy color="#751bf3" position={[-4, 3, 0]} />
            <Walls args={[0.3, 18, 3]} color="#210644" position={[9, 5, 0]} />
            <Walls args={[0.3, 18, 3]} color="#210644" position={[-9, 5, 0]} />
          </Physics>
        </Canvas>
      </div>
      <div className="bg-wrapper" />
    </main>
  );
}
