import { Environment, Float, MeshWobbleMaterial, OrbitControls } from '@react-three/drei';
import Heart from './Heart'

export const Experience = () => {
    return (
        <>
            <OrbitControls enableZoom={false} />
            <Float floatIntensity={1} speed={3}>
                <Heart scale={0.8}/>
            </Float>
            <Environment preset='sunset' background blur={0.9} />
        </>
    );
}