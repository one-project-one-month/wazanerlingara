import { lazy } from "react";
import PageLoader from "@/components/core/page-loader";

export const LandingPage = PageLoader(
	lazy(() => import("@/features/home/pages/landing")),
);
