import { useTexture, useVideoTexture } from '@react-three/drei';
import * as THREE from 'three';

export const Experience = () => {
  const props = useTexture({
    map : "textures/Color.jpg",
    normalMap:"textures/NormalGL.jpg",
    roughnessMap:"textures/Roughness.jpg",
    aoMap:"textures/AmbientOcclusion.jpg",
  });

  const texture = useTexture("textures/matcapTexture.png")
  const videoTexture = useVideoTexture("textures/spongebob-squarepants.mp4")

  return (
    <>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial map={videoTexture} />
      </mesh>
    </>
  );
};
