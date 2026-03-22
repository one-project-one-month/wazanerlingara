import { GAME_SFX_FILES } from "@/app/constants";
import { useGameSfxStore } from "@/stores/game-sfx-store";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const load = useGameSfxStore((state: any) => state.load);

  useEffect(() => {
    load(GAME_SFX_FILES);
  }, [load]);

  useEffect(() => {
    const completed = localStorage.getItem("onboarding");
    // If not completed and not already on the onboarding page, send them there
    if (!completed && location.pathname !== "/onboarding") {
      navigate("/onboarding", { replace: true });
    }

    // Optional: If they are done but try to go back to onboarding, send them home
    if (completed && location.pathname === "/onboarding") {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return (
    <div className="h-dvh w-dvw py-4 px-6 bg-black text-white overflow-x-hidden">
      <main>
        <Outlet />
      </main>
    </div>
  );
}
