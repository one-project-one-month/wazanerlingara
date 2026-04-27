

import { useGameImageStore } from "@/stores/game-image-store";
import type { Player } from "@/types/game.type";

interface PlayerCardProps {
  players: Player[];
  selectedPlayerId: string | null;
  onSelect: (id: string) => void;
}



const VotingPlayerCard = ({
  players,
  selectedPlayerId,
  onSelect }: PlayerCardProps) => {
  const getImageurl = useGameImageStore(s => s.getImageUrl);
  return (
    <section
      className={
        "grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:min-h-[55vh] content-center w-full max-w-5xl mx-auto px-4"
      }
    >
      {players.map((player) => {
        const isSelected = selectedPlayerId === player.id;
        const playerImage = getImageurl(player.imageId ?? "2");

        return (
          <button
            type="button"
            key={player.id}
            onClick={() => onSelect(player.id)}
            className={`
               p-4 flex flex-col items-center justify-center gap-4 border rounded-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[97%]
               ${isSelected ? "border-3 border-primary shadow-2xl bg-primary/5" : "border border-border bg-[#0A0A0A]"}
            `}
          >
            <img
              src={playerImage}
              alt={`${player.name} icon`}
              className="md:w-50 aspect-square"
            />
            <p className={"text-xl md:text-2xl text-center"}>{player.name}</p>
          </button>
        );
      })}
    </section>
  );
};

export default VotingPlayerCard;
