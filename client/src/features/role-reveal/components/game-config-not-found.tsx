import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { APP_CONFIG } from "@/app/config/app-config";

export function GameConfigNotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-2">Game not found</h2>

        <p className="text-gray-400 text-sm mb-6">
          Your game session may have expired or was not set up properly.
        </p>

        <Button
          className="w-full rounded-full py-2"
          onClick={() => navigate(APP_CONFIG.GAME_SETTING)}
        >
          Start New Game
        </Button>
      </div>
    </div>
  );
}
