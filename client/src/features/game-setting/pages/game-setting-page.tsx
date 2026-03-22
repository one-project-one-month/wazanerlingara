import BackButton from "@/components/common/back-button"
import { Button } from "@/components/ui/button"
import GameInfo from "../components/game-info"
import ImposterCounter from "../components/imposter-counter"
import ToggleImposterHint from "../components/toggle-imposter-hint"
import TimerModeSetting from "../components/timer-mode"
import { useNavigate } from "react-router-dom"
import { APP_CONFIG } from "@/app/config/app-config"

const GameSetting = () => {
    const navigate = useNavigate()
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

                    <ImposterCounter />
                    <TimerModeSetting />
                    <ToggleImposterHint />
                    <GameInfo />
                    <Button
                        className="text-2xl"
                        onClick={() => navigate(APP_CONFIG.ROLE_REVEAL)}
                    >
                        ရှေ့ဆက်မယ်
                    </Button>


                </div>

            </main>

        </section>
    )

}

export default GameSetting