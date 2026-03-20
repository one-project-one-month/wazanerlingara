import BackButton from "@/components/common/back-button"
import peopleIcon from "@/assets/svg/people-fill.svg"
import { useState } from "react"
import { changeToMMNumber } from "@/lib/change-to-mm-number"
import timmerIcon from "@/assets/svg/timmer.svg"
import profile from "@/assets/svg/profile.svg"
import info from "@/assets/svg/info-alert.svg"
import lightBulb from "@/assets/svg/light-bulb.svg"
import Switch from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import TimmerSetting from "../components/timmer-setting"
const GameSetting = () => {
    const [imposterCount, setImposterCount] = useState(1)
    const [hint, setHint] = useState(false)
    const [isTurnTimerMode, setIsTurnTimerMode] = useState(false)
    const [gameInfo, setGameInfo] = useState({
        players: 4,
        mode: "words",
        category: "food"
    })

    const handleImposterCount = (type: "INCREASE" | "DECREASE") => {
        setImposterCount(pre => type === "INCREASE" ? pre + 1 : pre === 1 ? 1 : pre - 1)

    }

    const toggleTimerMode = () => {
        setIsTurnTimerMode(pre => !pre)
    }
    return (
        <section className="relative mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-2xl flex-col px-2 pb-2 pt-1 sm:px-4">
            <div className="flex items-start gap-3 pt-1 md:block md:pt-0">
                <BackButton />

                <header className="flex-1 space-y-3 text-center md:space-y-4 md:pt-8 md:text-center">
                    <h1 className="text-[2.05rem] leading-none text-netural-100 md:text-[2.45rem]">
                        ဂိမ်းဆက်တင်
                    </h1>
                </header>
            </div>

            <main className="mt-5 flex flex-1 flex-col md:mt-7 rounded-2xl p-4">
                <div className="space-y-6">

                    {/* Imposter count */}
                    <div
                        className="flex items-center justify-between border border-white rounded-2xl px-4 py-6  bg-background-700"
                    >
                        <div
                            className="flex items-center gap-2"
                        >
                            <img
                                src={peopleIcon}
                                alt="people-icon"
                                className="w-6 md:w-8 h-6 md:h-8 "
                            />
                            <p
                                className="text-body-1"
                            >
                                Imposter အရေအတွက်
                            </p>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={() => handleImposterCount("DECREASE")}
                                className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8  flex items-center justify-center text-gray-700 cursor-pointer text-button "
                            >
                                -
                            </button>
                            <span className="text-body-1 w-6 text-center">
                                {changeToMMNumber(imposterCount)}
                            </span> {/* This should be dynamic */}
                            <button
                                type="button"
                                onClick={() => handleImposterCount("INCREASE")}
                                className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8   flex items-center justify-center text-gray-700 cursor-pointer text-button "
                            >
                                +
                            </button>



                        </div>
                    </div>

                    {/* Timmer section */}
                    <div
                        className="space-y-6 border border-white rounded-2xl p-4 md:p-6 bg-background-700"
                    >

                        <div
                            className="flex items-center gap-2"
                        >
                            <img
                                src={timmerIcon}
                                alt="people-icon"
                                className="w-6 md:w-8 h-6 md:h-8 "
                            />
                            <p
                                className="text-body-1"
                            >

                                Timing Modeကို ရွေးချယ်ပါ

                            </p>
                        </div>

                        <div
                            className="flex border  border-white rounded-2xl p-1 "
                        >
                            <button
                                type="button"
                                onClick={toggleTimerMode}
                                className={`py-4 px-6  flex-1  flex items-center gap-2  rounded-2xl 
                                ${isTurnTimerMode && "bg-white text-black"}
                                `}
                            >
                                <img src={profile} alt="profile-icon" className={`${isTurnTimerMode && "bg-black"}`} />
                                <span className="text-body-1">Turn Timer</span>
                            </button>
                            <button
                                type="button"
                                onClick={toggleTimerMode}
                                className={`py-4 px-6   flex-1  flex items-center gap-2  rounded-2xl 
                                     ${!isTurnTimerMode && "bg-white text-black"}
                                    `}
                            >
                                <img src={peopleIcon} alt="people-icon" className={`${!isTurnTimerMode && "bg-black"}`} />
                                <span className="text-body-1">Duration Timer</span>
                            </button>
                        </div>
                        <TimmerSetting isTurnTimerMode={isTurnTimerMode} />

                        {/* time indicator and timer setting will be here */}
                        {/* <div>
                            <div className="text-center ">
                                <h1 className="text-heading-1">02:00</h1>
                                <p className="text-body-1">second per round </p>
                            </div> */}


                        {/* time input range and indicator will be here */}
                        {/* <div className="flex  justify-center gap-2 w-full">
                                <button
                                    type="button"
                                    onClick={() => handleImposterCount("DECREASE")}
                                    className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8  flex items-center justify-center text-gray-700 cursor-pointer text-button "
                                >
                                    -
                                </button>
                                <div className="grid gird-cols-2 flex-1 mt-2">

                                    <input type="range" className="col-span-2" />
                                    <span>1mh</span>
                                    <span className="justify-self-end">10mh</span>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => handleImposterCount("INCREASE")}
                                    className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8   flex items-center justify-center text-gray-700 cursor-pointer text-button "
                                >
                                    +
                                </button>



                            </div>
                        </div> */}
                        {/* info text will be here */}
                        {/* <div className="flex gap-2">
                            <img
                                src={info}
                                alt="info-icon"
                                className="w-6 md:w-8 h-6 md:h-8 "
                            />
                            <p className=" text-body-2 max-w-3/4">
                                ကစားပွဲတစ်ခုလုံးအတွက် အချိန်တစ်ခုပဲ ရှိပါမယ်
                                (ဥပမာ- ၃မိနစ်)။ သတ်မှတ်ထားတဲ့ အချိန်အတွင်းမှာပဲ
                                အားလုံး တလှည့်စီ ကစားရမှာဖြစ်ပြီး၊ အချင်းချင်း
                                ဆွေးနွေးငြင်းခုံချင်တယ်ဆိုရင်တော့ Timer ကို
                                ခေတ္တရပ် (Pause)နိုင်ပါတယ်။</p>
                        </div> */}
                    </div>
                    {/* Imposter hint section */}

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
                        <Switch checked={hint} onChange={setHint} />
                    </div>

                    {/* game info */}

                    <div className="flex justify-between">
                        <h3 className="text-heading-6">
                            ပါဝင်ကစားမယ့်သူအရေအတွက်
                        </h3>
                        <p className="text-body-1">
                            ({changeToMMNumber(gameInfo.players)}) ယောက်
                        </p>

                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-heading-6">
                            ဂိမ်းအမျိူးအစား
                        </h3>
                        <p className="text-body-1">
                            {gameInfo.mode}
                        </p>

                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-heading-6">
                            အမျိူးအစား
                        </h3>
                        <p className="text-body-1">
                            {gameInfo.category}
                        </p>

                    </div>


                    <Button
                        className="text-2xl "
                    >
                        ရှေ့ဆက်မယ်
                    </Button>

                </div>

            </main>

        </section>
    )
}

export default GameSetting