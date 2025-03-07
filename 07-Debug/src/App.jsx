import { Canvas } from "@react-three/fiber";
import { OrbitControls, Grid, useHelper, Stats } from "@react-three/drei";
import * as THREE from "three";
import { useRef } from "react";
import { useControls , Leva } from "leva";

const Box = () => {
  const ref = useRef();
  useHelper(ref, THREE.BoxHelper, "0xac8ec7");

  const { position , color , opacity , transparent} = useControls({
    position: { x: 0, y: 0, z: 0 },
    color:'#ffffff',
    opacity:{
      value:0.5,
      min:0,
      max:1,
      step:0.01
    },
    transparent:true,
  });
    
  return (
    <mesh ref={ref} position={[position.x, position.y, position.z]} >
      <boxGeometry />
      <meshBasicMaterial color={color} transparent={transparent} opacity={opacity} />
    </mesh>
  );
};

function App() {
  return (
    <>
    <Leva/>
    <Stats/>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <OrbitControls />
        <axesHelper />
        {/* <gridHelper/> */}
        <Grid
          sectionSize={3}
          sectionColor={"purple"}
          sectionThickness={1}
          cellSize={3}
          cellColor={"#6f6f6f"}
          cellThickness={0.6}
          infiniteGrid
          fadeDistance={100}
          fadeStrength={5}
        />
        <Box />
      </Canvas>
    </>
  );
}

export default App;
