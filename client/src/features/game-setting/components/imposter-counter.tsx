import { changeToMMNumber } from "@/lib/change-to-mm-number"
import { useGameSettingStore } from "@/stores/game-setting-store"
import peopleIcon from "@/assets/svg/people-fill.svg"



const Counter = () => {
    const { imposterCount, increaseImposter, decreaseImposter } = useGameSettingStore();
    console.log(imposterCount)
    return (
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
                    onClick={decreaseImposter}
                    className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8  flex items-center justify-center text-gray-700 cursor-pointer text-button "
                >
                    -
                </button>
                <span className="text-body-1 w-6 text-center">
                    {changeToMMNumber(imposterCount)}
                </span> {/* This should be dynamic */}
                <button
                    type="button"
                    onClick={increaseImposter}
                    className="bg-white rounded-full w-6 md:w-8 h-6 md:h-8   flex items-center justify-center text-gray-700 cursor-pointer text-button "
                >
                    +
                </button>



            </div>
        </div>
    )
}

export default Counter