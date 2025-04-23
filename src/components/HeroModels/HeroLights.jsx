import * as THREE from "three";

const HeroLights = () => {
  return (
    <>
      {/* Front Light */}
      <spotLight
        position={[2, 5, 6]}
        intensity={100}
        angle={0.15}
        penumbra={0.2}
        color="white"
      />

      {/* Over Head Light */}
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.3}
        penumbra={0.5}
        color="#4cc9f0"
      />

      {/* Primitive Light */}
      <primitive
        object={new THREE.RectAreaLight("#A259FF", 8, 3, 2)}
        position={[1, 3, 4]}
        intensity={15}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* Point lights */}
      <pointLight
        position={[0, 1, 0]}
        intensity={10}
        color="#7209b7"
      />
      <pointLight
        position={[1, 2, -2]}
        intensity={10}
        color="#0d00a4"
      />
    </>
  );
};

export default HeroLights;
