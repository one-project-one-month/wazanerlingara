import { useCallback, useState } from "react";
import { useGameConfigStore } from "@/stores/game-config-store.ts";

import Buutee from "@/assets/players/buutee.svg";
import Arluu from "@/assets/players/arluu.svg";
import Gawli from "@/assets/players/gawli.svg";
import Sarou from "@/assets/players/sarou.svg";

interface PlayerCardProps {
  onSelect: (id: string | number) => void;
}

const IMAGE_MAP: Record<string | number, string> = {
  1: Arluu,
  2: Buutee,
  3: Sarou,
  4: Gawli,
};

const VotingPlayerCard = ({ onSelect }: PlayerCardProps) => {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const { config } = useGameConfigStore();
  const playersList = config?.players || [];

  const handleSelect = useCallback(
    (id: string) => {
      setSelectedId(id);
      onSelect(id);
    },
    [onSelect],
  );

  return (
    <section
      className={
        "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:min-h-[55vh] content-center w-full max-w-5xl mx-auto px-4"
      }
    >
      {playersList.map((player) => {
        const isSelected = selectedId === player.id;
        const playerImage = player.imageId ? IMAGE_MAP[player.imageId] : Arluu;

        return (
          <button
            type="button"
            key={player.id}
            onClick={() => handleSelect(player.id)}
            className={`
               p-4 flex flex-col items-center justify-center gap-4 border rounded-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[97%]
               ${isSelected ? "border-3 border-primary shadow-2xl bg-primary/5" : "border border-border bg-[#0A0A0A]"}
            `}
          >
            <img
              src={playerImage}
              alt={`${player.name} icon`}
              className="md:w-50"
            />
            <p className={"text-xl md:text-2xl text-center"}>{player.name}</p>
          </button>
        );
      })}
    </section>
  );
};

export default VotingPlayerCard;
