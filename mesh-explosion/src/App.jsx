import { Canvas } from '@react-three/fiber';
import { Experience } from './components/Experience';
import { ScrollControls } from '@react-three/drei';

const App = () =>{
  return (
    <>
      <Canvas shadows camera={{position:[0,0,5],fov:30}} >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={3}>
          <Experience />  
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;