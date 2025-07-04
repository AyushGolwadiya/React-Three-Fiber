import React from 'react'
import {Canvas} from '@react-three/fiber';
import Experience from './Experience';
import { Environment } from '@react-three/drei';

const App = () => {
  return (
    <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
      <Experience />
    </Canvas>
  )
}

export default App