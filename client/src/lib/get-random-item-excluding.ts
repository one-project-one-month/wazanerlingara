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

export function getRandomItemsExcluding<T>(
  arr: T[],
  count: number,
  excludeIds: string[] = [],
): T[] {
  const filtered = arr.filter((item: any) => !excludeIds.includes(item.id));

  // Shuffle array
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);

  return shuffled.slice(0, count);
}
