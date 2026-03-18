import type { ReactNode } from "react";

// Game Setup
export type SetupPageSettingItemType = {
  id: string;
  label: string;
  icon: ReactNode;
  hasToggle?: boolean;
};

export type PlayerInputType = {
  id: string;
  name: string;
};
