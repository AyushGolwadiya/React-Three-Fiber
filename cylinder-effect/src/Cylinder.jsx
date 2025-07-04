import { OrbitControls , useTexture } from "@react-three/drei";
import * as THREE from 'three';
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cylinder = () => {
    let mesh = useRef(null);
    const tex = useTexture('./image.png');
    useFrame((state,delta) => {
        mesh.current.rotation.y += delta*0.3;
    })
  return (
    <>
      <group rotation={[0,0,.1]}>
        <mesh ref={mesh} >
            <cylinderGeometry args={[1,1,1, 30, 30, true]} />
            <meshStandardMaterial map={tex} transparent side={THREE.DoubleSide} />
        </mesh>
      </group>
    </>
  );
};

export default Cylinder;
