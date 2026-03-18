import chat from "@/assets/svg/chat-bubble.svg"
import maganify from "@/assets/svg/maganify.svg"
import back from "@/assets/svg/back-button.svg"
const GameMode = () => {
    return (
        <section className="bg-black">

            <div className=" flex flex-col gap-6 items-center ">
                <div className="flex justify-between items-center w-full ">
                    <button>
                        <img src={back} />
                    </button>
                    <h1 className="text-heading-3">ဂိမ်းအမျိုးအစား ရွေးမယ်</h1>
                </div>
                <div className="flex items-start gap-4 h-40 w-full border p-4 rounded-2xl">
                    <img
                        src={maganify}
                        className="w-24  aspect-square"
                    />
                    <div className="space-y-2">
                        <h2 className="text-heading-5">
                            စကားလုံးဂိမ်း
                        </h2>
                        <p className="text-body-2">
                            လျှို့ဝှက်စကားလုံး မသိတဲ့သူကို ရှာမယ်
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4 h-40 w-full border p-4 rounded-2xl">
                    <img
                        src={chat}
                        className="w-24 aspect-square "
                    />
                    <div className="space-y-2">
                        <h2 className="text-heading-4">
                            အမေးအဖြေဂိမ်း
                        </h2>
                        <p className="text-body-1">
                            မေးခွန်းမသိဘဲ ဖြေနေတဲ့သူကို ရှာမယ်
                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default GameMode