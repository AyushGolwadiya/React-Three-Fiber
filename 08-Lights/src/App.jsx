import { OrbitControls, SpotLight, useHelper } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { useControls } from "leva";

const Lights2 = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.PointLightHelper, 0.5, "red");
  const { position, color, distance, decay, intensity } = useControls({
    position: {
      x: 1,
      y: 1,
      z: 1,
    },
    color: "#ff0000",
    distance: 3,
    decay: 2,
    intensity: 0.5,
  });

  return (
    <pointLight
      ref={ref}
      position={[position.x, position.y, position.z]}
      intensity={intensity}
      distance={distance}
      decay={decay}
      color={color}
    />
  );
};

const Lights1 = () => {
  return (
    <>
      <hemisphereLight color={"deepskyblue"} groundColor={"sandybrown"} />
    </>
  );
};

const Lights3 = () => {
  const ref = useRef();
  const helper = useHelper(ref, THREE.SpotLightHelper, "red");
  const { color, distance, attenuation, angle, anglePower, position } =
    useControls({
      color: "#876ae5",
      distance: 6,
      attenuation: 2.2,
      angle: 1,
      anglePower: 1,
    });
  return (
    <SpotLight
      ref={ref}
      color={color}
      distance={distance}
      attenuation={attenuation}
      angle={angle}
      anglePower={anglePower}
    />
  );
};

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 3, 3] }}>
        <OrbitControls />

        {/* <ambientLight intensity={0.2} />
        <directionalLight  intensity={0.6} position={[3,3,3]}  color="red"/>
        <directionalLight  intensity={0.6} position={[0,3,3]} color="green"/>
        <directionalLight  intensity={0.6} position={[-3,3,3]} color="blue" /> */}
        <Lights3 />
        <mesh rotation-y={Math.PI / 4}>
          <boxGeometry />
          <meshStandardMaterial color="white" roughness={1} metalness={0} />
        </mesh>

        <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
          <planeGeometry args={[5, 5]} />
          <meshPhysicalMaterial  clearcoat={0.5} color="white" reflectivity={0.8}/>
        </mesh>
      </Canvas>
    </>
  );
}

export default App;
