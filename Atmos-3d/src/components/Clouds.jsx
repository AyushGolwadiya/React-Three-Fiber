import { Cloud } from "./Cloud"
import { Cloud_11 } from "./Cloud_11"
import { Cloud_22 } from "./Cloud_22"

const Clouds = () => {
  return (
    <>
      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[-2, 1, -3]} />
      <Cloud opacity={0.5} scale={[0.3, 0.3, 0.3]} position={[1.5, -0.5, -2]} />
      <Cloud_22
        opacity={0.5}
        scale={[0.3, 0.3, 0.3]}
        position={[2, -0.2, -5]}
      />
      <Cloud_11
        opacity={0.5}
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[-5, -0.2, -12]}
      />
      <Cloud_11
        opacity={0.7}
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[-1, 1, -23]}
      />
      <Cloud_11
        opacity={0.3}
        scale={[0.4, 0.4, 0.4]}
        rotation-y={Math.PI / 9}
        position={[0, 1, -39]}
      />
    </>
  );
};
export default Clouds;
