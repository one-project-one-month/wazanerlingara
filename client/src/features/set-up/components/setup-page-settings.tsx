import chatIcon from "@/assets/svg/chat-icon.svg";
import incognitoIcon from "@/assets/svg/incognito-icon.svg";
import musicIcon from "@/assets/svg/music-icon.svg";
import speakerIcon from "@/assets/svg/speaker-icon.svg";
import { useGameSfxStore } from "@/stores/game-sfx-store";
import type { SetupPageSettingItemType } from "@/types/index.types";
import SettingRow from "./setting-row";

const settingItems: SetupPageSettingItemType[] = [
  {
    id: "music",
    label: "နောက်ခံသီချင်း",
    icon: <img src={musicIcon} alt="music-icon" />,
    hasToggle: true,
    href: null,
  },
  {
    id: "sound",
    label: "အသံ",
    icon: <img src={speakerIcon} alt="speaker-icon" />,
    hasToggle: true,
    href: null,
  },
  {
    id: "privacy",
    label: "ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု",
    icon: <img src={incognitoIcon} alt="incognito-icon" />,
    href: "/setting/legal-privacy"
  },
  {
    id: "chat",
    label: "ဆက်သွယ်ရန်",
    icon: <img src={chatIcon} alt="chat-icon" />,
    href: "/setting/contact-us"
  },
];

export default function SetupPageSetting() {
  const musicEnabled = useGameSfxStore((s) => s.musicEnabled)
  const soundEnabled = useGameSfxStore((s) => s.soundEnabled)
  const toggleMusic = useGameSfxStore((s) => s.toggleMusic)
  const toggleSound = useGameSfxStore((s) => s.toggleSound)


  const getCheck = (id: string) => {
    if (id === "music") return musicEnabled
    if (id === "sound") return soundEnabled
    return false
  }

  const handleToggle = (id: string) => {
    if (id === "music") return toggleMusic();
    if (id === "sound") return toggleSound();
  }


  return (
    <div className="space-y-3.5 sm:space-y-4">
      {settingItems.map((item) => (
        <SettingRow
          key={item.id}
          icon={item.icon}
          label={item.label}
          hasToggle={item.hasToggle}
          isOn={getCheck(item.id)}
          onToggle={() => handleToggle(item.id)}
          href={item.href}
        />
      ))}
    </div>
  );
}



