import chat from "@/assets/svg/chat-bubble.svg"
import maganify from "@/assets/svg/maganify.svg"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackButton from "@/components/ui/back-button"

type GameType = "words" | "question and answer";

const GAME_TYPES = [
    {
        type: "words",
        title: "စကားလုံးဂိမ်း",
        description: "လျှို့ဝှက်စကားလုံး မသိတဲ့သူကို ရှာမယ်",
        image: maganify
    },
    {
        type: "question and answer",
        title: "အမေးအဖြေဂိမ်း",
        description: "မေးခွန်းမသိဘဲ ဖြေနေတဲ့သူကို ရှာမယ်",
        image: chat
    },
]
const GameMode = () => {
    const [mode, setMode] = useState<GameType | undefined>()
    const navigate = useNavigate()
    const handleClick = (type: GameType) => {
        setMode(type)
    }

    const handleStartGame = () => {
        if (!mode) return;
        navigate('/category')
    }
    return (
        <section className="  relative">
            <BackButton
                className="absolute left-0"
            />

            <div className="py-4 flex flex-col   justify-between flex-1 max-w-xl mx-auto h-[95dvh]">

                <div className="w-full  space-y-6 mt-4">

                    <h1 className="text-heading-3 text-center">ဂိမ်းအမျိုးအစား ရွေးမယ်</h1>
                    <div className="space-y-4">
                        {
                            GAME_TYPES.map((
                                { type, title, description, image }) => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => handleClick(type as GameType)}
                                    className={`flex items-start gap-4  w-full  p-4 rounded-2xl bg-background-500  border-white
                                    ${type === mode ? "border-4" : "border"}    
                                    `}
                                >
                                    <img
                                        src={image}
                                        alt={title}
                                        className="w-20 md:w-24  aspect-square"
                                    />
                                    <div className="flex flex-col items-start" >
                                        <h2 className="text-heading-5">
                                            {title}
                                        </h2>
                                        <p className="text-body-2 ">
                                            {description}
                                        </p>
                                    </div>
                                </button>
                            ))
                        }


                    </div>
                </div>
                <Button
                    onClick={handleStartGame}
                >ရှေ့ဆက်မယ်</Button>
            </div>
        </section>
    )
}

export default GameMode