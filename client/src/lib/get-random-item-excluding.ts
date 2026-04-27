export function getRandomItemExcluding<T extends { id: string }>(
  arr: T[],
  excludeId?: string,
): T | null {
  const filtered = excludeId
    ? arr.filter((item) => item.id !== excludeId)
    : arr;

  if (!filtered.length) return null;

  return filtered[Math.floor(Math.random() * filtered.length)];
}
