import { changeToMMNumber } from "@/lib/change-to-mm-number";
import { useGameConfigStore } from "@/stores/game-config-store";

const GameInfo = () => {
  const { config } = useGameConfigStore();
  return (
    <>
      <div className="flex justify-between">
        <h3 className="text-heading-6">ပါဝင်ကစားမယ့်သူအရေအတွက်</h3>
        <p className="text-body-1">
          ({changeToMMNumber(config?.players.length ?? 3)}) ယောက်
        </p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-heading-6">ဂိမ်းအမျိူးအစား</h3>
        <p className="text-body-1">
          {config?.gameMode === "word" ? "စကားလုံး" : "အမေးအဖြေ"}ဂိမ်း
        </p>
      </div>
      <div className="flex justify-between">
        <h3 className="text-heading-6">အမျိူးအစား</h3>
        <p className="text-body-1">{config?.category?.name}</p>
      </div>
    </>
  );
};

export default GameInfo;
