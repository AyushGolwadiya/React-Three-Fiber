import { Canvas } from "@react-three/fiber";
import React from "react";
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import Container from "./Container";

const App = () => {
  return (
    <div className="relative w-full h-screen">
      <nav className="fixed flex border-b-[1px] pb-2 top-0 left-1/2 -translate-x-1/2 items-center px-10 py-1 gap-15">
        {["iPhone", "ipad", "Accessories", "mac", "products"].map(
          (item, index) => (
            <a
              className="text-white text-[0.9vw] font-[100] tracking-tighter leading-8"
              href="#"
              key={index}
            >
              {item}
            </a>
          )
        )}
      </nav>
      <div className="absolute top-40 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h3 className="masked text-9xl whitespace-nowrap tracking-tighter mt-10">
          Macbook Pro.
        </h3>
        <h5 className="text-center">Oh so pro!</h5>
      </div>
      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <OrbitControls enableRotate={false} enableZoom={false} />
        <Environment preset="sunset" />
        <ScrollControls pages={3}>
          <Container />
        </ScrollControls>
      </Canvas>
      <p className="absolute bottom-20 left-80 font-[100] text-center text-[0.8vw] mt-3 px-10">
          MacBook Pro laptop with M4, M4 Pro and M4 Max chips. Built for Apple
          Intelligence. Up to 24 hours of battery life. Liquid Retina XDR
          display.
        </p>
    </div>
  );
};

export default App;
