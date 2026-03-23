import IconGroupPeople from "@/assets/icons/icon-group-people";
import IconPeople from "@/assets/icons/icon-people";
import info from "@/assets/svg/info-alert.svg";
import clockIcon from "@/assets/svg/timmer.svg";
import { useGameConfigStore } from "@/stores/game-config-store";
import { useState } from "react";

const TimerModeSetting = () => {
  const { config, updateGameConfig } = useGameConfigStore();
  const [timerMode, setTimerMode] = useState<"TURN" | "DURATION">("TURN");
  const isTurn = timerMode === "TURN";
  const turnTimer = config?.gameSetting?.turnTimer ?? 5;
  const durationTimer = config?.gameSetting?.durationTimer ?? 120;
  const timerValue = isTurn ? turnTimer : durationTimer;
  const min = isTurn ? 5 : 60;
  const max = isTurn ? 60 : 600;

  const setTimer = (newValue: number) => {
    if (!config) return;
    if (newValue < min || newValue > max) return;
    updateGameConfig({
      gameSetting: {
        ...config.gameSetting,
        ...(isTurn ? { turnTimer: newValue } : { durationTimer: newValue }),
      },
    });
  };

  const increaseTimer = () => {
    if (timerValue < max) setTimer(timerValue + (isTurn ? 5 : 60));
  };

  const decreaseTimer = () => {
    if (timerValue > min) setTimer(timerValue - (isTurn ? 5 : 60));
  };

  const formatTimerValue = () => {
    let timer: string;
    if (isTurn) {
      timer = `00:${String(timerValue).padStart(2, "0")}`;
    } else {
      timer =
        String(Math.floor(timerValue / 60)).padStart(2, "0") +
        ":" +
        String(timerValue % 60).padStart(2, "0");
    }

    return timer;
  };

  return (
    <div className="space-y-6 border border-white rounded-2xl p-4 md:p-6 bg-background-700">
      <div className="flex items-center gap-2">
        <img
          src={clockIcon}
          alt="clock-icon"
          className="w-6 md:w-8 h-6 md:h-8 "
        />
        <p className="text-body-1">Timing Modeကို ရွေးချယ်ပါ</p>
      </div>

      <div className="flex border  border-white rounded-2xl p-1 ">
        <button
          type="button"
          onClick={() => setTimerMode("TURN")}
          className={`px-2 py-4 flex-1 flex items-center justify-center gap-1 lg:gap-2 rounded-2xl ${isTurn ? "bg-white text-black" : "bg-transparent text-white"}
        `}
        >
          <IconPeople className="size-6" />
          <span className="text-body-1">Turn Timer</span>
        </button>
        <button
          type="button"
          onClick={() => setTimerMode("DURATION")}
          className={`px-2 py-4 flex-1 flex items-center justify-center gap-1 lg:gap-2 rounded-2xl ${!isTurn ? "bg-white text-black" : "bg-transparent text-white"}
        `}
        >
          <IconGroupPeople className="size-6" />
          <span className="text-body-1">Duration Timer</span>
        </button>
      </div>

      <div className="space-y-6">
        <div className="text-center ">
          <h1 className="text-heading-1">{formatTimerValue()}</h1>
          <p className="text-body-1">
            {isTurn ? "second per turn" : "second per round "}
          </p>
        </div>

        {/* time input range and indicator will be here */}
        <div className="flex  justify-center gap-2 w-full">
          <button
            type="button"
            onClick={decreaseTimer}
            className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8  flex items-center justify-center text-gray-700 cursor-pointer text-button "
          >
            -
          </button>
          <div className="grid gird-cols-2 flex-1 mt-2">
            <input
              type="range"
              min={min}
              max={max}
              value={timerValue}
              onChange={(e) => setTimer(Number(e.target.value))}
              className="col-span-2"
            />
            <span>{isTurn ? `${min}s` : `${Math.floor(min / 60)}min `}</span>
            <span className="justify-self-end">
              {isTurn ? `${max}s` : `${Math.floor(max / 60)}mins `}
            </span>
          </div>
          <button
            type="button"
            onClick={increaseTimer}
            className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8   flex items-center justify-center text-gray-700 cursor-pointer text-button "
          >
            +
          </button>
        </div>

        {/* info text will be here */}
        <div className="flex gap-2">
          <img src={info} alt="info-icon" className="size-6" />
          <p className="text-lg font-thin">
            {isTurn
              ? "ကစားသမား တစ်ယောက်ချင်းစီအတွက် (ဥပမာ- စက္ကန့်၃၀စီ) ညီတူညီမျှ အချိန်ရပါမယ်။ ကိုယ့်အလှည့်ပြီးရင် နောက်တစ်ယောက်အတွက် Timerအသစ် ပြန်စပါမယ်။"
              : "ကစားပွဲတစ်ခုလုံးအတွက် အချိန်တစ်ခုပဲ ရှိပါမယ် (ဥပမာ - ၃မိနစ်)။ သတ်မှတ်ထားတဲ့ အချိန်အတွင်းမှာပဲ အားလုံး တလှည့်စီ ကစားရမှာဖြစ်ပြီး၊ အချင်းချင်း ဆွေးနွေးငြင်းခုံချင်တယ်ဆိုရင်တော့ Timer ကိုခေတ္တရပ် (Pause)နိုင်ပါတယ်။"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimerModeSetting;
