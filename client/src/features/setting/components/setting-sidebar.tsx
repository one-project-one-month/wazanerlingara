import { APP_CONFIG } from "@/app/config/app-config";
import logoImage from "@/assets/icons/logo.svg";
import chatBubbleIcon from "@/assets/svg/chat-bubble.svg";
import chatIcon from "@/assets/svg/chat-icon.svg";
import incognitoIcon from "@/assets/svg/incognito-icon.svg";
import musicIcon from "@/assets/svg/music-icon.svg";
import speakerIcon from "@/assets/svg/speaker-icon.svg";
import BackButton from "@/components/common/back-button";
import Switch from "@/components/ui/switch";
import { useGameSfxStore } from "@/stores/game-sfx-store";
import { Link, useLocation } from "react-router-dom";

const settingItems = {
  buttonGroup: [
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
  ],
  linkGroup: [
    {
      id: "privacy",
      label: "ဥပဒေရေးရာနှင့် ကိုယ်ရေးလုံခြုံမှု",
      icon: <img src={incognitoIcon} alt="incognito-icon" />,
      to: "legal-privacy",
    },
    {
      id: "how-to-play",
      label: "ဘယ်လိုကစားရမလဲ",
      icon: <img src={chatBubbleIcon} alt="chat bubble icon" />,
      to: "how-to-play",
    },
    {
      id: "contact-us",
      label: "ဆက်သွယ်ရန်",
      icon: <img src={chatIcon} alt="chat-icon" />,
      to: "contact-us",
    },
  ],
};

export default function SettingSideBar() {
  const path = useLocation().pathname.split("/")[2];
  const toggleMusic = useGameSfxStore((s) => s.toggleMusic);
  const toggleSound = useGameSfxStore((s) => s.toggleSound);
  const musicEnabled = useGameSfxStore((s) => s.musicEnabled);
  const soundEnabled = useGameSfxStore((s) => s.soundEnabled);

  const getCheck = (id: string) => {
    if (id === "music") return musicEnabled;
    if (id === "sound") return soundEnabled;
    return false;
  };
  const handleToggle = (id: string) => {
    if (id === "music") return toggleMusic();
    if (id === "sound") return toggleSound();
  };

  return (
    <div>
      <Link
        to={APP_CONFIG.SET_UP}
        className="hidden md:flex items-center gap-2"
      >
        <img src={logoImage} alt="wazana logo" />
        <h1 className="text-heading-6 font-extrabold leading-tight text-shadow-md text-shadow-white">
          WAZANERLINGARA
        </h1>
      </Link>
      <div className="flex md:hidden items-center  ">
        <BackButton />
        <h2 className="text-heading-4 flex-1 text-center">Setting</h2>
      </div>

      <main className="mt-14 space-y-6">
        {settingItems.buttonGroup.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-2 border-2 border-white rounded-2xl p-4"
          >
            <div className="size-8">{item.icon}</div>
            <span className="text-body-1 font-medium">{item.label}</span>
            {item.hasToggle && (
              <div className="ml-auto">
                <Switch
                  checked={getCheck(item.id)}
                  onChange={() => handleToggle(item.id)}
                />
              </div>
            )}
          </div>
        ))}
        {settingItems.linkGroup.map((item) => (
          <Link
            to={item.to}
            key={item.id}
            className={`flex items-center gap-2 border-2 rounded-2xl p-4 ${path === item.to ? "border-primary-400" : "border-white "} `}
          >
            <div className="size-8">{item.icon}</div>
            <span className="text-body-1 font-medium">{item.label}</span>
          </Link>
        ))}
      </main>

      <small className=" text-xs absolute bottom-2 w-[90%] text-center ">
        v 0.01
      </small>
    </div>
  );
}
