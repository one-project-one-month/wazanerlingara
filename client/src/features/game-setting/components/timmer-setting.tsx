type Props = {
    isTurnTimerMode: boolean
}
import info from "@/assets/svg/info-alert.svg"

const TimmerSetting = ({ isTurnTimerMode }: Props) => {
    return (
        <div className="space-y-6">
            <div className="text-center ">
                <h1 className="text-heading-1">
                    {isTurnTimerMode ? "00:05" : "02:00"}</h1>
                <p className="text-body-1">
                    {isTurnTimerMode ? "second per turn" : "second per round "}

                </p>
            </div>


            {/* time input range and indicator will be here */}
            <div className="flex  justify-center gap-2 w-full">
                <button
                    type="button"

                    className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8  flex items-center justify-center text-gray-700 cursor-pointer text-button "
                >
                    -
                </button>
                <div className="grid gird-cols-2 flex-1 mt-2">

                    <input type="range" className="col-span-2" />
                    <span>{isTurnTimerMode ? "1s" : "1mins"}</span>
                    <span className="justify-self-end">{isTurnTimerMode ? "60s" : "10mins"}</span>
                </div>
                <button
                    type="button"

                    className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8   flex items-center justify-center text-gray-700 cursor-pointer text-button "
                >
                    +
                </button>



            </div>

            {/* info text will be here */}
            <div className="flex gap-2">
                <img
                    src={info}
                    alt="info-icon"
                    className="w-6 md:w-8 h-6 md:h-8 "
                />
                <p className=" text-body-2 max-w-3/4">
                    {
                        isTurnTimerMode ?
                            "ကစားသမား တစ်ယောက်ချင်းစီအတွက် (ဥပမာ- စက္ကန့်၃၀စီ) ညီတူညီမျှ အချိန်ရပါမယ်။ ကိုယ့်အလှည့်ပြီးရင် နောက်တစ်ယောက်အတွက် Timerအသစ် ပြန်စပါမယ်။"
                            : "ကစားပွဲတစ်ခုလုံးအတွက် အချိန်တစ်ခုပဲ ရှိပါမယ် (ဥပမာ - ၃မိနစ်)။ သတ်မှတ်ထားတဲ့ အချိန်အတွင်းမှာပဲ အားလုံး တလှည့်စီ ကစားရမှာဖြစ်ပြီး၊ အချင်းချင်း ဆွေးနွေးငြင်းခုံချင်တယ်ဆိုရင်တော့ Timer ကိုခေတ္တရပ် (Pause)နိုင်ပါတယ်။"
                    }
                </p>
            </div>
        </div >
    )
}

export default TimmerSetting