import PageLoader from "@/components/core/page-loader";
import { lazy } from "react";

export const LandingPage = PageLoader(
  lazy(() => import("@/features/home/pages/landing")),
);

export const TestPage = PageLoader(
  lazy(() => import("@/features/home/pages/test")),
);

export const OnboardingPage = PageLoader(
  lazy(() => import("@/features/onboarding/pages")),
);
export const SetupPage = PageLoader(
  lazy(() => import("@/features/set-up/pages/set-up-page")),
);

export const VotingPage = PageLoader(
  lazy(() => import("@/features/voting/pages/voting-page")),
);

export const ResultPage = PageLoader(
  lazy(() => import("@/features/voting/pages/result-page")),
);

export const GameMode = PageLoader(
  lazy(() => import("@/features/game-mode/pages/game-mode-page")),
);
