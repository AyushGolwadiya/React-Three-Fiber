import React from 'react'
import { OrbitControls, useGLTF ,Environment , Float} from '@react-three/drei'
import { useControls } from 'leva';

const Experience = () => {
    let model = useGLTF('./mac.glb');
    let meshes = [];
    console.log(model)

  return (
    <>
    <color args={["#111"]} attach={"background"} />
    <Environment preset='sunset' blur={0.5}/>
    <OrbitControls makeDefault/>
        <Float rotationIntensity={0.2}>
          <primitive object={model.scene} />
        </Float>

    </>

  )
}

export default Experience