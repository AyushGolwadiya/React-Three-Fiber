import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Gltf, useFBX, useGLTF } from '@react-three/drei';
import { Fish } from './Fish';

export const Experience = () => {
  const { scene } = useGLTF("models/Fish.gltf")
  const dino = useFBX("models/Dino.fbx")
  // const model = useLoader(GLTFLoader,"models/Fish.gltf")
  return (
    <>
      <ambientLight intensity={0.9}/>
      <Fish/>
    </>
  );
};
