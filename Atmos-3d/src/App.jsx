import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import { ScrollControls } from '@react-three/drei'

const App = () => {
  return (
    <>
      <Canvas>
        <ScrollControls pages={5} damping={0.3}>
          <Experience />
        </ScrollControls>
      </Canvas>
    </>
  )
}

export default App