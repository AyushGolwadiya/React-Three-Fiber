import {
  Environment,
  OrbitControls,
  PivotControls,
  PresentationControls,
} from "@react-three/drei";
import { Canvas, events } from "@react-three/fiber";
import { Lighthouse } from "./components/Lighthouse";
function App() {
  return (
    <>
      <Canvas camera={{ position: [-1.5, 3, 10], fov: 42 }}>
          <Lighthouse position-y={-1} scale={[0.2, 0.2, 0.2]} />
        
        <Environment preset="sunset" />
      </Canvas>
    </>
  );
}

export default App;
