import { Canvas } from "@react-three/fiber";
import React from "react";
import Cylinder from "./Cylinder";
import { Bloom, EffectComposer, ToneMapping } from "@react-three/postprocessing";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  const Handler = (e) => {

  }
  return (
    <>
    <Canvas onClick={() => Handler()} camera={{ fov: 35 }} className="bg-black">
      <ambientLight />
      <Cylinder />
      <EffectComposer>
        <Bloom 
          intensity={2}
          mipmapBlur
          luminanceThreshold={0}
          luminanceSmoothing={0}
        />
        <ToneMapping adaptive/>
      </EffectComposer> 
    </Canvas>

    <div className="absolute top-2/3 left-2/5 translate-y-1/2">
      <h1 className="text-9xl text-zinc-300">Work</h1>
    </div>
    </>
  );
};

export default App;
