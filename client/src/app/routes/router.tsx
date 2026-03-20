import {

  GameModePage,
  GameSettingPage,
  LandingPage,
  OnboardingPage,
  ResultPage,
  SetupPage,
  TestPage,
  VotingPage,
} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";
import ChooseCategories from "@/features/choose-categories/pages/choose-categories";
import GameStartPage from "@/features/game-start/pages/game-start-page";
import NotFound from "@/features/not-found";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
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
        path: "set-up",
        element: <SetupPage />,
      },
      {
        path: "voting",
        element: <VotingPage />,
      },
      {
        path: "result",
        element: <ResultPage />,
      },
      {
        path: "game-start",
        element: <GameStartPage />,
      },
      {
        path: "game-mode",
        element: <GameModePage />,
      },
      {
        path: "choose-categories",
        element: <ChooseCategories />,
      },
      {
        path: "game-setting",
        element: <GameSettingPage />
      }
    ],
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
]);

export default router;
