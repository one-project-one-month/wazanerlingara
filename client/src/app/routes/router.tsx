import { createBrowserRouter } from "react-router-dom";
import {
  LandingPage,
  OnboardingPage,
  TestPage,
} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";
import SetupPage from "@/features/set-up/pages/set-up-page";
import GameStartPage from "@/features/game-start/pages/game-start-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "test",
        element: <TestPage />,
      },
      {
        path: "onboarding",
        element: <OnboardingPage />,
      },
      {
        path: "set-up",
        element: <SetupPage />,
      },
      {
        path: "game-start",
        element: <GameStartPage />,
      },
    ],
  },
]);

export default router;
