import { IcosahedronGeometry, MeshStandardMaterial, type Texture } from "three";
import { Vector3, Mesh, Euler } from "three";
import { DecalGeometry } from "three/examples/jsm/geometries/DecalGeometry";

export const getMesh = (): Mesh => {
  const material = new MeshStandardMaterial({ color: "#fff8eb", flatShading: true });
  const mesh = new Mesh(
    (new IcosahedronGeometry(1, 1)).rotateZ(1),
    material
  );

  return mesh;
};

export const getDecal = (origine: Mesh, texture: Texture, size: number): Mesh => {
  const decalGeometry = new DecalGeometry(origine, new Vector3(1, 0, 0), new Euler(0, Math.PI / 2), new Vector3(size, size, size));
  const decalMaterial = new MeshStandardMaterial({
    map: texture,
    transparent: true,
    flatShading: true,
    polygonOffset: true,
    polygonOffsetFactor: -1
  });


  return new Mesh(decalGeometry, decalMaterial);
};