import {
  DurationTimerPage,
  GameMode,
  LandingPage,
  OnboardingPage,
  ResultPage,
  SetupPage,
  TestPage,
  VotingPage
} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";
import GamePlayLoading from "@/features/game-play/pages/loading";
import GamePlayPage from "@/features/game-play/pages/page";
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
      {
        path: '/game-mode',
        element: <GameMode />
      },
      {
        path:'/game-play',
       
        children:[


          {
            index:true,
             element:<GamePlayLoading />,
          },
          {
            path:'turn-timer',
            element:<GamePlayPage />
          },
          {
            path:'duration-timer',
            element:<DurationTimerPage />
          }
        ]
      }
    ],
  },
  {
    path: "/onboarding",
    element: <OnboardingPage />,
  },
]);

export default router;
