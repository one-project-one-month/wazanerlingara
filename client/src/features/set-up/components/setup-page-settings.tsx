import chatIcon from "@/assets/svg/chat-icon.svg";
import incognitoIcon from "@/assets/svg/incognito-icon.svg";
import musicIcon from "@/assets/svg/music-icon.svg";
import speakerIcon from "@/assets/svg/speaker-icon.svg";
import type { SetupPageSettingItemType } from "@/types/index.types";
import { useState } from "react";
import SettingRow from "./setting-row";

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



