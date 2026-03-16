import type { ReactNode } from "react";

export type SetupPageSettingItemType = {
  id: string;
  label: string;
  icon: ReactNode;
  hasToggle?: boolean;
};
