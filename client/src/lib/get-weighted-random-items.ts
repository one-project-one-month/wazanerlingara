type GetWeightedRandomItemsParams<T> = {
  players: T[];
  count: number;
  previousIds?: string[];
};

export function getWeightedRandomItems<T extends { id: string }>({
  players,
  count,
  previousIds = [],
}: GetWeightedRandomItemsParams<T>): T[] {
  const weights = players.map((player) => {
    const isPrevious = previousIds.includes(player.id);

    return {
      player,
      weight: isPrevious ? 0.3 : 1,
    };
  });

  const selected: T[] = [];

  while (selected.length < count) {
    const totalWeight = weights.reduce((sum, w) => sum + w.weight, 0);

    let random = Math.random() * totalWeight;

    for (let i = 0; i < weights.length; i++) {
      random -= weights[i].weight;

      if (random <= 0) {
        const chosen = weights[i].player;

        if (!selected.find((p) => p.id === chosen.id)) {
          selected.push(chosen);
        }

        break;
      }
    }
  }

  return selected;
}
