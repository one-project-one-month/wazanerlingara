import {
  ChooseCategory,
  DurationTimerPage,
  GameModePage,
  GameSettingPage,
  GameStartPage,
  LandingPage,
  OnboardingPage,
  ResultPage,
  SetupPage,
  TestPage,
  RoleRevealPage,
  VotingPage,
} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";
import GamePlayLoading from "@/features/game-play/pages/loading";
import GamePlayPage from "@/features/game-play/pages/page";
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
        path: "role-reveal",
        element: <RoleRevealPage />,
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
        path: 'game-mode',
        element: <GameModePage />
      },
      {
        path: 'game-play',

        children: [


          {
            index: true,
            element: <GamePlayLoading />,
          },
          {
            path: 'turn-timer',
            element: <GamePlayPage />
          },
          {
            path: 'duration-timer',
            element: <DurationTimerPage />
          }
        ],

      },
      {
        path: "choose-categories",
        element: <ChooseCategory />,
      },
      {
        path: "game-setting",
        element: <GameSettingPage />,
      },
    ],
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
]);

export default router;
