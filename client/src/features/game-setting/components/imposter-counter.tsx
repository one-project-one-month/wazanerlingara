import peopleIcon from "@/assets/svg/people-fill.svg";
import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { useGameConfigStore } from "@/stores/game-config-store";

const ImposterCounter = () => {
  const { config, updateGameConfig } = useGameConfigStore();
  const imposterCount = config?.gameSetting.imposterCount || 0;

  const handleImposterCounter = (type: "INCREASE" | "DECREASE") => {
    if (!config) return;
    if (type === "INCREASE") {
      updateGameConfig({
        gameSetting: {
          ...config?.gameSetting,
          imposterCount: Math.min(
            config?.players.length - 1,
            imposterCount + 1,
          ),
        },
      });
    } else {
      updateGameConfig({
        gameSetting: {
          ...config?.gameSetting,
          imposterCount: Math.max(1, imposterCount - 1),
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-between border border-white rounded-2xl px-4 py-6  bg-background-700">
      <div className="flex items-center gap-2">
        <img src={peopleIcon} alt="people-icon" className="size-8" />
        <p className="text-body-1">Imposter အရေအတွက်</p>
      </div>
      <div className="flex items-center justify-center gap-2">
        <button
          type="button"
          onClick={() => handleImposterCounter("DECREASE")}
          className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8  flex items-center justify-center text-gray-700 cursor-pointer text-button "
        >
          -
        </button>
        <span className="text-body-1 w-6 h-6 flex justify-center items-center">
          {changeToMMNumber(imposterCount)}
        </span>{" "}
        {/* This should be dynamic */}
        <button
          type="button"
          onClick={() => handleImposterCounter("INCREASE")}
          className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8   flex items-center justify-center text-gray-700 cursor-pointer text-button "
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ImposterCounter;
