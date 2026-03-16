import { lazy } from "react";
import PageLoader from "@/components/core/page-loader";

export const LandingPage = PageLoader(
  lazy(() => import("@/features/home/pages/landing")),
);

export const TestPage = PageLoader(
  lazy(() => import("@/features/home/pages/test")),
);

export const OnboardingPage = PageLoader(
  lazy(() => import("@/features/onboarding/pages"))
)
