import type { PlayerType } from "@/types/index.types";

type Props = Pick<PlayerType, "id" | "name">;

export const createPlayerInput = (name = ""): Props => ({
  id: crypto.randomUUID(),
  name,
});
