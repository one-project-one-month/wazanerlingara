import { createBrowserRouter } from "react-router-dom";
import {
  LandingPage,
  OnboardingPage,
  SetupPage,
  TestPage
} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";


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
    ],

  },
  {
    path: "/onboarding",
    element: <OnboardingPage />
  }
]);

export default router;
