
import logoImage from "@/assets/icons/logo.svg";
import chatBubbleIcon from "@/assets/svg/chat-bubble.svg";
import chatIcon from "@/assets/svg/chat-icon.svg";
import incognitoIcon from "@/assets/svg/incognito-icon.svg";
import musicIcon from "@/assets/svg/music-icon.svg";
import speakerIcon from "@/assets/svg/speaker-icon.svg";
import BackButton from "@/components/common/back-button";
import Switch from "@/components/ui/switch";
import type { SetupPageSettingItemType } from "@/types/index.types";

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
    {
        id: "how-to-play",
        label: "ဘယ်လိုကစားရမလဲ",
        icon: <img src={chatBubbleIcon} alt="chat bubble icon" />,
    },
];

export default function SettingSideBar() {


    return (
        <div className="md:max-w-sm w-full h-[95vh] md:border-r border-white px-4 md:px-6  relative  ">

            <div className="hidden md:flex items-center gap-2">
                <img src={logoImage} alt="wazana logo" />
                <h1 className="text-heading-6 font-extrabold leading-tight text-shadow-md text-shadow-white">WAZANERLINGARA</h1>
            </div>
            <div className="flex md:hidden items-center  ">
                <BackButton />
                <h2 className="text-heading-4 flex-1 text-center">Setting</h2>
            </div>

            <main className="mt-14 space-y-6">
                {
                    settingItems.map((item) => (
                        <div key={item.id} className="flex items-center gap-2 border border-white rounded-2xl p-4">
                            <div className="size-8">
                                {item.icon}
                            </div>
                            <span className="text-body-1 font-medium">{item.label}</span>
                            {item.hasToggle && (
                                <div className="ml-auto">
                                    <Switch />
                                </div>
                            )}
                        </div>
                    ))
                }
            </main>

            <small className=" text-xs absolute bottom-2 w-[90%] text-center ">v 0.01</small>

        </div>
    );
}



