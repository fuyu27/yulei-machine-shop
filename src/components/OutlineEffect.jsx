export function applyOutlineEffect(raycaster, outlinePairs, outlinePass, navigationMeshes, hoveredMesh, outlinedMeshes, defaultOutlines) {
  const intersects = raycaster.current.intersectObjects(outlinedMeshes);

  if (intersects.length > 0) {
    const intersectedObject = intersects[0].object;
    const interactiveName = intersectedObject.userData?.interactiveName || intersectedObject.name;

    if (hoveredMesh.current !== intersectedObject) {
      const groupMeshes = navigationMeshes[interactiveName];
      
      if (groupMeshes && Array.isArray(groupMeshes)) {
        outlinePass.selectedObjects = groupMeshes;
      } else {
        outlinePass.selectedObjects = [intersectedObject];
      }

      hoveredMesh.current = intersectedObject;
    }
  } else {
    outlinePass.selectedObjects = [];
    hoveredMesh.current = null;
  }
}
