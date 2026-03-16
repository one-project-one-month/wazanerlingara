import { createBrowserRouter } from "react-router-dom";
import { LandingPage, TestPage } from "@/app/constants/lazyload";

const router = createBrowserRouter([
  {
    path: "/",
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
    ],
  },
]);

export default router;
