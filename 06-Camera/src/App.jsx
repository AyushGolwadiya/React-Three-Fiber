import { Environment , OrbitControls , PerspectiveCamera , OrthographicCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { City } from "./components/City";



function App() {
  return (
    <Canvas >
      <OrthographicCamera 
        top={ 2 }
        bottom={ -2 }
        left={-2 * ( window.innerWidth / window.innerHeight )}
        right={2 * ( window.innerWidth / window.innerHeight )}
        position={[3,1.5,5]} 
        makeDefault />
      <OrbitControls/>
      {/* IGNORE FOR NOW */}
      <City />
      <Environment preset="city" />
    </Canvas>
  );
}

export default App;
