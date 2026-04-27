import PageLoader from "@/components/core/page-loader";
import { lazy } from "react";

export const LandingPage = PageLoader(
  lazy(() => import("@/features/home/pages/landing")),
);

export const TestPage = PageLoader(
  lazy(() => import("@/features/home/pages/test")),
);

export const OnboardingPage = PageLoader(
  lazy(() => import("@/features/onboarding/pages/onboarding-page")),
);
export const SetupPage = PageLoader(
  lazy(() => import("@/features/set-up/pages/set-up-page")),
);

export const RoleRevealPage = PageLoader(
  lazy(() => import("@/features/role-reveal/pages/role-reveal-page")),
);
export const VotingPage = PageLoader(
  lazy(() => import("@/features/voting/pages/voting-page")),
);

export const ResultPage = PageLoader(
  lazy(() => import("@/features/voting/pages/result-page")),
);

export const GameModePage = PageLoader(
  lazy(() => import("@/features/game-mode/pages/game-mode-page")),
);
export const GameSettingPage = PageLoader(
  lazy(() => import("@/features/game-setting/pages/game-setting-page")),
);
export const ChooseCategory = PageLoader(
  lazy(() => import("@/features/choose-categories/pages/choose-categories")),
);
export const GameStartPage = PageLoader(
  lazy(() => import("@/features/game-start/pages/game-start-page")),
);

export const DurationTimerPage = PageLoader(
  lazy(() => import('@/features/game-play/pages/duration-timer')),
);
export const SettingPage = PageLoader(
  lazy(() => import('@/features/setting/pages/setting')),
);
export const HowToPlayPage = PageLoader(
  lazy(() => import('@/features/setting/pages/how-to-play')),
);
export const LegalAndPrivacyPage = PageLoader(
  lazy(() => import('@/features/setting/pages/legal-privacy')),
);
export const ContactUsPage = PageLoader(
  lazy(() => import('@/features/setting/pages/contact-us')),
);

