import { useGameSettingStore } from "@/stores/game-setting-store";
import lightBulb from "@/assets/svg/light-bulb.svg"
import Switch from "@/components/ui/switch";

const ToggleImposterHint = () => {
    const { hint, toggleHint } = useGameSettingStore();
    return (
        <div
            className="flex items-center justify-between border border-white rounded-2xl px-4 py-6  bg-background-700"
        >
            <div
                className="flex items-center gap-2"
            >
                <img
                    src={lightBulb}
                    alt="light bulb-icon"
                    className="w-6 md:w-8 h-6 md:h-8 "
                />
                <p
                    className="text-body-1"
                >
                    Imposterကို အရိပ်အမြွက်ပေးမလား
                </p>
            </div>
            <Switch checked={hint} onChange={toggleHint} />
        </div>
    )
}

export default ToggleImposterHint