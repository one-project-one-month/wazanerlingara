import {useCallback, useState} from "react";
import Buutee from "@/assets/players/buutee.svg";
import Arluu from "@/assets/players/arluu.svg";
import Gawli from "@/assets/players/gawli.svg";
import Sarou from "@/assets/players/sarou.svg";

interface PlayerCardProps {
  onSelect: (name: string) => void;
}

type Player = {
  name: string;
  icon: string;
};

const PLAYERS: Player[] = [
  { name: "အာလူး", icon: Arluu },
  { name: "ဘူးသီး", icon: Buutee },
  { name: "စာဥ", icon: Sarou },
  { name: "ဂေါ်လီ", icon: Gawli },
];

const PlayerCard = ({ onSelect }: PlayerCardProps) => {
  const [selectedName, setSelectedName] = useState<string | null>(null);

  const handleSelect = useCallback((name: string) => {
    setSelectedName(name);
    onSelect(name);
  }, [onSelect]);

  return (
      <section
          className={"grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:min-h-[55vh] content-center w-full max-w-5xl mx-auto px-4"}
      >
        {PLAYERS.map((player) => {
          const isSelected = selectedName === player.name;

          return (
              <button
                  type={"button"}
                  key={player.name}
                  onClick={() => handleSelect(player.name)}
                  className={`
               p-4 flex flex-col items-center justify-center gap-4 border rounded-3xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-[97%]
               ${isSelected ? "border-3 border-primary shadow-2xl bg-primary/5" : "border border-border bg-card"}
           `}
              >
                <img src={player.icon} alt={`${player.name} icon`} className="md:w-50" />
                <p className={"text-xl md:text-2xl text-center"}>{player.name}</p>
              </button>
          );
        })}
      </section>
  );
};

export default PlayerCard;