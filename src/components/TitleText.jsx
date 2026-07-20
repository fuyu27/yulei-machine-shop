import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import helvetikerBold from 'three/examples/fonts/helvetiker_bold.typeface.json';

// Top-to-bottom lines of the title and their text sizes (world units).
const LINES = [
  { text: "YULEI'S MACHINE", size: 0.24 },
  { text: 'SHOP', size: 0.24 },
  { text: '(PORTFOLIO)', size: 0.17 },
];
const LINE_GAP = 0.11;

// Where the title sits in the *initial* view, in normalized device coords
// (-1..1). The group is billboarded to the starting camera, so on load it
// reads as flat 2D text pinned to the lower-left of the screen; orbiting
// then reveals it as extruded 3D text floating in space.
const TITLE_NDC_X = -0.9; // left edge of the text block
const TITLE_NDC_Y = -0.55; // bottom edge of the text block
const TITLE_DISTANCE = 7; // desired world units in front of the initial camera
// The title must stay above the floor plane (y = 0) or the Reflector hides
// it; its distance is automatically capped to keep its bottom edge above this.
const TITLE_FLOOR_MARGIN = 0.1;

function makeTextMesh(text, size, font, material) {
  const geometry = new TextGeometry(text, {
    font,
    size,
    height: size * 0.25,
    curveSegments: 8,
    bevelEnabled: true,
    bevelThickness: size * 0.03,
    bevelSize: size * 0.02,
    bevelSegments: 2,
  });
  // Left-align: shift so the line's left edge and baseline sit at the
  // group's local origin (x=0, y=0), centered in depth.
  geometry.computeBoundingBox();
  const bb = geometry.boundingBox;
  geometry.translate(-bb.min.x, -bb.min.y, -(bb.min.z + bb.max.z) / 2);
  return new THREE.Mesh(geometry, material);
}

function addTitleText(scene, camera) {
  const font = new FontLoader().parse(helvetikerBold);

  const material = new THREE.MeshStandardMaterial({
    color: 0xf2f2f2,
    metalness: 0.3,
    roughness: 0.4,
  });

  const group = new THREE.Group();

  // Stack bottom-up; every line shares the group's left edge (local x = 0).
  let baseline = 0;
  [...LINES].reverse().forEach(({ text, size }) => {
    const mesh = makeTextMesh(text, size, font, material);
    mesh.position.y = baseline;
    group.add(mesh);
    baseline += size + LINE_GAP;
  });

  // Billboard to the initial camera so the text starts out looking 2D.
  camera.updateMatrixWorld();
  group.quaternion.copy(camera.quaternion);

  // Anchor the group's lower-left corner at the requested NDC point of the
  // initial view, TITLE_DISTANCE units out along the view direction.
  const forward = camera.getWorldDirection(new THREE.Vector3());
  const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
  const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);

  // Direction from the camera to the anchor point per unit of distance
  // (the NDC offsets scale linearly with distance, so this is constant).
  const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
  const anchorDir = forward.clone()
    .addScaledVector(right, TITLE_NDC_X * tanHalf * camera.aspect)
    .addScaledVector(up, TITLE_NDC_Y * tanHalf);

  // Cap the distance so the text's bottom edge never dips below the floor.
  let distance = TITLE_DISTANCE;
  if (anchorDir.y < 0) {
    const maxDistance = (camera.position.y - TITLE_FLOOR_MARGIN) / -anchorDir.y;
    distance = Math.min(distance, maxDistance);
  }

  group.position.copy(camera.position).addScaledVector(anchorDir, distance);

  scene.add(group);
  return group;
}

export default addTitleText;
