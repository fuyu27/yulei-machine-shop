export const SHELF_GROUP_KEY = 'ix_shelf';
export const SHELF_ITEM_KEYS = ['ix_mbot', 'ix_embedded', 'ix_FRC'];

// The shelf is a single unit until you've panned in on it: hovering/clicking
// any individual item on it before that resolves to the shelf as a whole.
// Once focused, the shelf's own mesh goes inert and items resolve to
// themselves. Returns null when the raw hit has no interaction in the
// current phase (the shelf mesh itself, once focused).
export function resolveShelfInteraction(rawName, shelfFocused) {
  if (!rawName) return null;

  const isShelfItem = SHELF_ITEM_KEYS.includes(rawName);
  const isShelfGroup = rawName === SHELF_GROUP_KEY;

  if (!isShelfItem && !isShelfGroup) return rawName;
  if (!shelfFocused) return SHELF_GROUP_KEY;
  return isShelfGroup ? null : rawName;
}
