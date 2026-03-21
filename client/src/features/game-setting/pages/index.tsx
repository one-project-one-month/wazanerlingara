import BackButton from "@/components/common/back-button"
import { changeToMMNumber } from "@/lib/change-to-mm-number"
import { Button } from "@/components/ui/button"
import Counter from "../components/imposter-counter"
import { useGameSettingStore } from "@/stores/game-setting-store"
import ToggleImposterHint from "../components/toggle-imposter-hint"
import TimerModeSetting from "../components/timer-mode"

const GameSetting = () => {

    const { playerCount, mode, category } = useGameSettingStore();

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
                    <Counter />
                    {/* Timmer section */}
                    <TimerModeSetting />
                    {/* Imposter hint section */}
                    <ToggleImposterHint />


                    {/* game info */}

                    <div className="flex justify-between">
                        <h3 className="text-heading-6">
                            ပါဝင်ကစားမယ့်သူအရေအတွက်
                        </h3>
                        <p className="text-body-1">
                            ({changeToMMNumber(playerCount)}) ယောက်
                        </p>

                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-heading-6">
                            ဂိမ်းအမျိူးအစား
                        </h3>
                        <p className="text-body-1">
                            {mode === "WORDS" ? "စကားလုံး" : "အမေးအဖြေ"}ဂိမ်း
                        </p>

                    </div>
                    <div className="flex justify-between">
                        <h3 className="text-heading-6">
                            အမျိူးအစား
                        </h3>
                        <p className="text-body-1">
                            {category}
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