import {
  LandingPage,
  OnboardingPage,
  ResultPage,
  SetupPage,
  TestPage,
  VotingPage,
} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";
import GameStartPage from "@/features/game-start/pages/game-start-page";
import { createBrowserRouter } from "react-router-dom";

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
    ],
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
]);

export default router;
