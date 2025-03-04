import { Canvas } from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from 'three';

function App() {
  return (
    <Canvas camera={{ position: [3, 3, 3] }}>
      <OrbitControls/>
      <mesh position-x={-.6} >
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color='hotpink'  side={THREE.BackSide}/>
      </mesh>

      <mesh position-x={.6} position-z={-1} >
        <boxGeometry args={[1,1,1]}/>
        <meshStandardMaterial color='hotpink' side={THREE.FrontSide} />
      </mesh>
       
      <ambientLight intensity={0.5}/>
      <directionalLight position={[0,0,5]} intensity={1}/>
      <directionalLight position={[0,5,5]} intensity={0.5}/>
    </Canvas>
  );
}

export default App;
