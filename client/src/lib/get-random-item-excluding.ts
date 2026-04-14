export function getRandomItemExcluding<T>(
  arr: T[],
  excludeId?: string,
): T | null {
  const filtered = excludeId
    ? arr.filter((item: any) => item.id !== excludeId)
    : arr;

  if (!filtered.length) return null;

  return filtered[Math.floor(Math.random() * filtered.length)];
}
