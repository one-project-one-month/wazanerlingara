import PageLoader from "@/components/core/page-loader";
import { lazy } from "react";

export const LandingPage = PageLoader(
  lazy(() => import("@/features/home/pages/landing")),
);
