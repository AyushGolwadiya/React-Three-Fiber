import {
  ContactShadows,
  useGLTF,
  Text,
  Billboard,
  Text3D,
} from "@react-three/drei";
import { Character } from "./Character";

import * as THREE from "three";

export const Experience = () => {
  const woodenSign = useGLTF("models/Wooden Sign.glb");

  return (
    <>
      <Text3D
        font={"fonts/Poppins_Regular.json"}
        position={[-8, 2, -5]}
        rotation-x={-Math.PI * 0.015}
        bevelEnabled
        bevelThickness={0.5}
        bevelSize={0.1}
        bevelSegments={50}
        size={4}
      >
        ZELDA
        <meshStandardMaterial color="#a1bb6f" />
      </Text3D>
      <group position-x={-1.5} rotation-y={THREE.MathUtils.degToRad(15)}>
        <primitive object={woodenSign.scene} />
        <Text
          fontSize={0.3}
          position={[0, 1.2, 0.01]}
          maxWidth={1}
          textAlign="center"
          font="fonts/Poppins-Regular.ttf"
        >
          Hyrule Castle
          <meshStandardMaterial color={"white"} />
        </Text>
      </group>
      <group position={[1.5, 0, 0]} rotation-y={-Math.PI / 4}>
        <Billboard position-y={3}>
          <Text fontSize={0.2} anchorY={"bottom"}>
            Link
            <meshStandardMaterial color={"black"} />
          </Text>
          <Text fontSize={0.2} anchorY={"center"}>
            Zelda Personal Hero
            <meshStandardMaterial color={"grey"} />
          </Text>
        </Billboard>
        <Character />
      </group>
      <ContactShadows opacity={0.42} scale={42} far={42} />
    </>
  );
};
