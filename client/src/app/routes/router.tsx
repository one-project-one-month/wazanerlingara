import { createBrowserRouter } from "react-router-dom";
import {LandingPage, OnboardingPage, RoleRevealPage, TestPage} from "@/app/constants/lazyload";
import MainLayout from "@/components/layouts/main-layout";
import SetupPage from "@/features/set-up/pages/set-up-page";

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
        element: <OnboardingPage />
      },
      {
        path:"role-reveal",
        element:<RoleRevealPage/>
      },
      {
        path: "set-up",
        element: <SetupPage />,
      },
    ],
  },
]);

export default router;
