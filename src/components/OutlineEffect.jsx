import { resolveShelfInteraction } from './shelfInteraction';

export function applyOutlineEffect(raycaster, outlinePairs, outlinePass, navigationMeshes, hoveredMesh, outlinedMeshes, defaultOutlines, shelfFocusedRef) {
  const intersects = raycaster.current.intersectObjects(outlinedMeshes);

  if (intersects.length > 0) {
    const intersectedObject = intersects[0].object;

    if (hoveredMesh.current !== intersectedObject) {
      const rawName = intersectedObject.userData?.interactiveName || intersectedObject.name;
      const effectiveName = resolveShelfInteraction(rawName, shelfFocusedRef?.current);
      const groupMeshes = effectiveName ? navigationMeshes[effectiveName] : null;

      if (groupMeshes && Array.isArray(groupMeshes)) {
        outlinePass.selectedObjects = groupMeshes;
      } else if (effectiveName) {
        outlinePass.selectedObjects = [intersectedObject];
      } else {
        outlinePass.selectedObjects = [];
      }

      hoveredMesh.current = intersectedObject;
    }
  } else {
    outlinePass.selectedObjects = [];
    hoveredMesh.current = null;
  }
}
