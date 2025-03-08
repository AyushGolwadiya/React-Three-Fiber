import { useCursor, useKeyboardControls } from "@react-three/drei";
import { useRef, useState } from "react";
import { Controls } from "../App";
import { useFrame } from "@react-three/fiber";

const MOVMENT_SPEED = 0.05;
export const MoveableSphere = (props) => {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const [selected, setSelected] = useState(false);
  const forwardPressed = useKeyboardControls(
    (state) => state[Controls.forward]
  );
  const backwardPressed = useKeyboardControls(
    (state) => state[Controls.backward]
  );
  const rightPressed = useKeyboardControls((state) => state[Controls.right]);
  const leftPressed = useKeyboardControls((state) => state[Controls.left]);
  
  useFrame(() => {
    if (!selected) {
      return;
    }
    if (forwardPressed) {
      ref.current.position.y += MOVMENT_SPEED;
    }
    if (backwardPressed) {
      ref.current.position.y -= MOVMENT_SPEED;
    }
    if (rightPressed) {
      ref.current.position.x += MOVMENT_SPEED;
    }
    if (leftPressed) {
      ref.current.position.x -= MOVMENT_SPEED;
    }
  });

  let color = hovered ? "pink" : "white";
  if (selected) {
    color = "hotpink";
  }
  return (
    <mesh
      ref={ref}
      {...props}
      onPointerEnter={(e) => {
        e.stopPropagation(true);
        setHovered(true);
      }}
      onPointerLeave={(e) => {
        e.stopPropagation(true);
        setHovered(false);
      }}
      onClick={(e) => {
        e.stopPropagation(true);
        setSelected(!selected);
      }}
      onPointerMissed={() => {
        setSelected(false);
      }}
    >
      <sphereGeometry args={[0.5, 64, 64]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
