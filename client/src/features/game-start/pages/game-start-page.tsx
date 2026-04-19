import { APP_CONFIG } from "@/app/config/app-config";
import plusCircleButtonIcon from "@/assets/svg/plus-circle-icon.svg";
import BackButton from "@/components/common/back-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { cn } from "@/lib/util";
import { useGameConfigStore } from "@/stores/game-config-store";
import type { PlayerInputType } from "@/types/index.types";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const MIN_PLAYERS = 3;
const MAX_PLAYERS = 10;

const createPlayerInput = (name = ""): PlayerInputType => ({
  id: crypto.randomUUID(),
  name,
});

export default function GameStartPage() {
  const { config, updateGameConfig } = useGameConfigStore();
  const navigate = useNavigate();
  const [playerInputs, setPlayerInputs] = useState<PlayerInputType[]>([
    createPlayerInput(),
  ]);

  const validPlayers = useMemo(
    () => playerInputs.map((player) => player.name.trim()).filter(Boolean),
    [playerInputs],
  );

  const playerCount = validPlayers.length;
  const canStartGame = playerCount >= MIN_PLAYERS;

  const handleInputChange = (index: number, value: string) => {
    setPlayerInputs((previousInputs) =>
      previousInputs.map((input, currentIndex) =>
        currentIndex === index ? { ...input, name: value } : input,
      ),
    );
  };

  const handleAddPlayer = () => {
    setPlayerInputs((previousInputs) => {
      if (previousInputs.length >= MAX_PLAYERS) {
        return previousInputs;
      }

      return [...previousInputs, createPlayerInput()];
    });
  };

  const handleRemovePlayer = (id: string) => {
    setPlayerInputs((previousInputs) => {
      if (previousInputs.length === 1) {
        return [createPlayerInput()];
      }

      return previousInputs.filter((input) => input.id !== id);
    });
  };

  const handleStartGame = () => {
    if (!canStartGame && !config) {
      return;
    }

    updateGameConfig({
      players: validPlayers.map((name) => ({
        id: crypto.randomUUID(),
        name,
        imageId: null,
      })),
    });
    navigate(APP_CONFIG.CHOOSE_GAME_MODE);
  };

  return (
    <div className="relative mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col py-4 px-2 lg:px-6">
      <div className="flex items-start gap-3 md:block">
        <BackButton />

        <header className="flex-1 text-center md:space-y-4 md:pt-8 md:text-center">
          <h1 className="text-[2.05rem] leading-none text-netural-100 md:text-[2.45rem]">
            ဘယ်သူတွေ ကစားမလဲ
          </h1>
        </header>
      </div>
      <p className="max-w-md text-xl lg:text-2xl text-center mt-4 leading-relaxed text-netural-200 mx-auto">
        ပါဝင်ကစားသွားမှာဖြစ်တဲ့ သူငယ်ချင်းတွေရဲ့ နာမည်တွေကို အောက်မှာ
        ရိုက်ထည့်ပေးပါ။
      </p>

      <div className="mt-5 flex flex-1 flex-col space-y-3 md:mt-7">
        <p
          className={cn(
            "pl-1 text-[1.2rem] leading-none md:text-[1.8rem]",
            playerCount > 0 ? "text-success-500" : "text-netural-200",
          )}
        >
          {changeToMMNumber(playerCount)} / {changeToMMNumber(MAX_PLAYERS)}
        </p>

        <div className="space-y-3">
          {playerInputs.map((playerInput, index) => (
            <div key={playerInput.id} className="relative">
              <Input
                type="text"
                value={playerInput.name}
                maxLength={28}
                onChange={(event) =>
                  handleInputChange(index, event.currentTarget.value)
                }
                autoFocus
                placeholder="နာမည် ရိုက်ထည့်ပါ..."
                className="h-16 text-[1.3rem] md:h-20 md:text-2xl"
              />

              {playerCount >= 1 && (
                <button
                  type="button"
                  onClick={() => handleRemovePlayer(playerInput.id)}
                  className="absolute right-4 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border-2 border-netural-100 text-netural-100 md:h-8 md:w-8"
                  aria-label="Remove player"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3L11 11M11 3L3 11"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          ))}
        </div>

        <Button
          type="button"
          variant="outline"
          onClick={handleAddPlayer}
          disabled={playerInputs.length >= MAX_PLAYERS}
          className="h-16 text-[1.25rem] md:h-20 md:text-[1.75rem]"
        >
          <span className="inline-flex items-center gap-2">
            <img
              src={plusCircleButtonIcon}
              alt="plus-circle-icon"
              className="size-8"
            />

            <span>နောက်ထပ်ထည့်မယ်</span>
          </span>
        </Button>

        <div className="mt-auto space-y-3 pb-1 text-center">
          {!canStartGame && (
            <p className="text-[1.1rem] text-primary-400 md:text-[1.4rem]">
              အနည်းဆုံး {changeToMMNumber(MIN_PLAYERS)} ယောက်ရှိမှ
              ကစားလို့ရပါမယ်
            </p>
          )}

          <Button
            type="button"
            onClick={handleStartGame}
            disabled={!canStartGame}
            className="h-18 flex items-center justify-center text-2xl tracking-wide"
          >
            ရှေ့ဆက်မယ်
          </Button>
        </div>
      </div>
    </div>
  );
}
