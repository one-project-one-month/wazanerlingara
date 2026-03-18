import chatIcon from "@/assets/svg/chat-icon.svg";
import incognitoIcon from "@/assets/svg/incognito-icon.svg";
import musicIcon from "@/assets/svg/music-icon.svg";
import speakerIcon from "@/assets/svg/speaker-icon.svg";
import type { SetupPageSettingItemType } from "@/types/index.types";
import { useState } from "react";

const settingItems: SetupPageSettingItemType[] = [
  {
    id: "music",
    label: "နောက်ခံသီချင်း",
    icon: <img src={musicIcon} alt="music-icon" />,
    hasToggle: true,
  },
  {
    id: "sound",
    label: "အသံ",
    icon: <img src={speakerIcon} alt="speaker-icon" />,
    hasToggle: true,
  },
  {
    id: "privacy",
    label: "ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု",
    icon: <img src={incognitoIcon} alt="incognito-icon" />,
  },
  {
    id: "chat",
    label: "ဆက်သွယ်ရန်",
    icon: <img src={chatIcon} alt="chat-icon" />,
  },
];

export default function SetupPageSetting() {
  const [toggleState, setToggleState] = useState<Record<string, boolean>>(() =>
    settingItems.reduce<Record<string, boolean>>((acc, item) => {
      if (item.hasToggle) {
        acc[item.id] = false;
      }
      return acc;
    }, {}),
  );

  const handleToggle = (id: string) => {
    setToggleState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="space-y-3.5 sm:space-y-4">
      {settingItems.map((item) => (
        <SettingRow
          key={item.id}
          icon={item.icon}
          label={item.label}
          hasToggle={item.hasToggle}
          isOn={Boolean(toggleState[item.id])}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}

function SettingRow({
  icon,
  label,
  hasToggle = false,
  isOn = false,
  onToggle,
}: Omit<SetupPageSettingItemType, "id"> & {
  isOn?: boolean;
  onToggle?: () => void;
}) {
  return (
    <div className="flex h-17 items-center justify-between rounded-3xl bg-white/10 px-4 py-12 sm:h-18 sm:px-5">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <span className="shrink-0 text-netural-100">{icon}</span>
        <span className="truncate text-[19px] text-netural-100 sm:text-[22px]">
          {label}
        </span>
      </div>

      {hasToggle ? (
        <OffToggle isOn={isOn} onToggle={onToggle} label={label} />
      ) : null}
    </div>
  );
}

const OffToggle = ({
  isOn,
  onToggle,
  label,
}: {
  isOn: boolean;
  onToggle?: () => void;
  label: string;
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isOn}
      aria-label={`${label} toggle`}
      onClick={onToggle}
      className={`relative ml-3 inline-flex h-12 w-24 shrink-0 items-center rounded-full border px-1 font-semibold tracking-wider transition-colors duration-300 ${
        isOn
          ? "border-primary-400 bg-primary-500 text-netural-100"
          : "border-netural-700 bg-background-300 text-netural-100"
      }`}
    >
      <span
        className={`pointer-events-none absolute left-1 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${
          isOn ? "translate-x-12 bg-white" : "translate-x-0 bg-netural-100"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2 text-[16px] leading-none">
        <span
          className={`transition-opacity duration-200 ${isOn ? "opacity-100" : "opacity-50"}`}
        >
          ON
        </span>
        <span
          className={`transition-opacity duration-200 ${isOn ? "opacity-50" : "opacity-100"}`}
        >
          OFF
        </span>
      </span>
    </button>
  );
};
