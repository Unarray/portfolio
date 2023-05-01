<script lang="ts">
  import { Canvas, PerspectiveCamera, OrbitControls, AmbientLight, DirectionalLight, useTexture, MeshInstance } from "@threlte/core";
  import { Float } from "@threlte/extras";
  import clsx from "clsx";
  import { getDecal, getMesh } from "./skill-ball.util";

  export let imgURL: string;
  export let cameraDistance = 6;
  let clazz = "";
  export { clazz as class };

  const style = clsx("w-32 h-32 overflow-hidden", clazz);

  const ballMesh = getMesh();
  const decalMesh = getDecal(ballMesh, useTexture(imgURL), 1.1);
</script>

<div class={style}>
  <Canvas dpr={1} rendererParameters={{ preserveDrawingBuffer: true }}>
    <PerspectiveCamera fov={24} position={{ x: cameraDistance, y: 0, z: 0 }}>
      <OrbitControls enableZoom={false} enableDamping enablePan={false} />
    </PerspectiveCamera>

    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <AmbientLight intensity={0.2}/>
      <DirectionalLight position={{ x: 0.1, y: 1, z: -0.5 }} />

      <MeshInstance mesh={ballMesh} castShadow receiveShadow />
      <MeshInstance mesh={decalMesh} />
    </Float>
  </Canvas>
</div>