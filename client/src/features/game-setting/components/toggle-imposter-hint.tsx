import lightBulb from "@/assets/svg/light-bulb.svg";
import Switch from "@/components/ui/switch";
import { useGameConfigStore } from "@/stores/game-config-store";
import { useGameSfxStore } from "@/stores/game-sfx-store";

const ToggleImposterHint = () => {
  const { config, updateGameConfig } = useGameConfigStore();
  const play = useGameSfxStore.getState().play;

  const toggleHint = (checked: boolean) => {
    if (!config) return;

    updateGameConfig({
      gameSetting: {
        ...config?.gameSetting,
        canImposterGetHint: checked,
      },
    });
  };

  return (
    <div className="flex items-center justify-between border border-white rounded-2xl px-4 py-6  bg-background-700">
      <div className="flex items-center gap-2">
        <img
          src={lightBulb}
          alt="light bulb-icon"
          className="w-6 md:w-8 h-6 md:h-8 "
        />
        <p className="text-body-1">Imposterကို အရိပ်အမြွက်ပေးမလား</p>
      </div>
      <Switch
        checked={config?.gameSetting.canImposterGetHint ?? false}
        onChange={(checked) => {
          play("click", 0.5);
          toggleHint(checked);
        }}
      />
    </div>
  );
};

export default ToggleImposterHint;
