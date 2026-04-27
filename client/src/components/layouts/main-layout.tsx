import { APP_CONFIG } from "@/app/config/app-config";
import { GAME_IMAGE_ASSETS, GAME_SFX_FILES } from "@/app/constants";
import AssetPreloadScreen from "@/components/core/asset-preload-screen";
import { useGameImageStore } from "@/stores/game-image-store";
import { useGameSfxStore } from "@/stores/game-sfx-store";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export default function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate()
  const loadSfx = useGameSfxStore((s) => s.load);
  const loadImages = useGameImageStore((s) => s.load);
  const imagesLoaded = useGameImageStore((s) => s.isLoaded);

  useEffect(() => {
    loadSfx(GAME_SFX_FILES);
  }, [loadSfx]);

  useEffect(() => {
    void loadImages(GAME_IMAGE_ASSETS);
  }, [loadImages]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const completed = localStorage.getItem("onboarding");
    if (!completed && location.pathname !== "/onboarding") {
      navigate(APP_CONFIG.ONBOARDING, { replace: true });
    }

    if (completed && location.pathname === "/") {
      navigate(APP_CONFIG.SET_UP, { replace: true });
    }
  }, [imagesLoaded, location.pathname, navigate]);

  return (
    <div className="h-dvh w-dvw py-4 px-4 lg:px-6 bg-black text-white overflow-x-hidden">
      {!imagesLoaded ? (
        <AssetPreloadScreen />
      ) : (
        <main>
          <Outlet />
        </main>
      )}
    </div>
  );
}
