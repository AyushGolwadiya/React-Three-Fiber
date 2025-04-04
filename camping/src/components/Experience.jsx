import React, { use, useEffect, useRef } from "react";
import { CameraControls, Environment, Float, MeshReflectorMaterial, OrbitControls, RenderTexture, Text, useFont } from "@react-three/drei";
import { Camping } from "./Camping";
import { degToRad } from "three/src/math/MathUtils.js";
import * as THREE from 'three';
import { useAtom } from 'jotai';
import { currentPageAtom } from "./UI";
import { useFrame } from "@react-three/fiber";

const bloomColor = new THREE.Color("#FFF");
bloomColor.multiplyScalar(1.5);

const Experience = () => {

    const controls = useRef();
    const meshFitCameraHome = useRef();
    const meshFitCameraStore = useRef();
    const textRef = useRef();
    const [currentPage,setCurrentPage] = useAtom(currentPageAtom);

    useFrame((_,delta) => {
      textRef.current.opacity = THREE.MathUtils.lerp(textRef.current.opacity , currentPage === "home" || currentPage === "intro" ? 1:0 ,delta * 1.5);
    })

    const intro = async () => {
        controls.current.dolly(-22);
        controls.current.smoothTime = 1.6;
        setTimeout(() => {
          setCurrentPage("home");
        },1200)
        fitCamera();
    }

    const fitCamera = async () => {
      if(currentPage === "store"){
        controls.current.smoothTime = 0.8;
        controls.current.fitToBox(meshFitCameraStore.current,true);
      }else {
        controls.current.smoothTime = 1.6;
        controls.current.fitToBox(meshFitCameraHome.current,true);
      }
    }

    useEffect(()=>{
        intro();
    },[])

    useEffect(()=>{
      fitCamera();
      window.addEventListener("resize",fitCamera);
      return () => window.removeEventListener("resize",fitCamera);
    },[currentPage])
  return (
    <>
      <CameraControls ref={controls} />
      <mesh ref={meshFitCameraHome} position-z={1.5} position-x={.4} visible={false}>
        <boxGeometry args={[8,2,2]} />
        <meshBasicMaterial color={"orange"} transparent opacity={0.3} />
      </mesh>
      <Text
        font={"fonts/NeueHaasDisplayBold.ttf"}
        fontWeight={100}
        position={[-1.3, -0.5, 1]}
        lineHeight={0.8}
        textAlign="center"
        rotation-y={degToRad(30)}
        anchorY={"bottom"}
      >
        MY LITTLE {"\n"} CAMPING
        <meshBasicMaterial color={bloomColor}  toneMapped={false} ref={textRef} transparent>
            <RenderTexture attach={"map"}>
                <color attach={"background"} args={["#fff"]}/>
                <Environment preset="sunset" />
                <Float floatIntensity={4} rotationIntensity={5}>
                    <Camping  scale={1.6} rotation-y={-degToRad(25)} rotation-x={degToRad(40)} position-y={-.5}/>
                </Float>
            </RenderTexture>
        </meshBasicMaterial>
      </Text>
      <group rotation-y={degToRad(-25)} position-x={3.1}>
        <Camping scale={0.6} html/>
        <mesh ref={meshFitCameraStore} visible={false}>
            <boxGeometry args={[2,1,2]} />
            <meshBasicMaterial color='orange' transparent opacity={0.5} />
        </mesh>
      </group>
      <mesh position-y={-.5} position-z={5} rotation-x={-Math.PI / 2}>
        <planeGeometry args={[50,50]} />
        <MeshReflectorMaterial 
            blur={[50,50]}  
            resolution={542}
            mixBlur={1}
            mixStrength={10}
            roughness={1}
            depthScale={1}
            opacity={0.5}
            transparent
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={"#333"}
            metalness={0.5}
        />
      </mesh>
      <Environment preset="sunset" />
    </>
  );
};

useFont.preload('fonts/NeueHaasDisplayLight.ttf')
export default Experience;
