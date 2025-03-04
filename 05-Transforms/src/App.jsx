import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

function App() {
  return (
    <Canvas camera={{ position: [0, 3, 8] }}>
      <OrbitControls/>
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 3, 5]} intensity={0.5} />

      {/* Objects */}
      <group position={[0,0,0]} scale={[3,3,3]} rotation-y={Math.PI * .25} >
      <mesh position-x={1}>
        <boxGeometry />
        <meshStandardMaterial color="red" />
      </mesh>
      <mesh >
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
      <mesh position-x={-1}>
        <boxGeometry />
        <meshStandardMaterial color="green" />
      </mesh>
      </group>
    </Canvas>
  );
}

export default App;
