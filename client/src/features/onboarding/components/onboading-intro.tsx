import logo from "@/assets/images/logo.svg"
import { useEffect } from "react"
type PropType = {
    onNext: () => void
}
const OnboadingIntroPage = ({ onNext }: PropType) => {
    //render 3s after than navigate to onboarding page 1
    useEffect(() => {
        const timer = setTimeout(() => {
            onNext()
        }, 3000)
        return () => clearTimeout(timer)
    }, [onNext])

    return (
        <section
            className="h-dvh bg-primary-500 flex justify-center items-center"
        >
            <div
                className="flex flex-col items-center gap-4"
            >
                <img
                    src={logo}
                    alt="WAZANERLINGARA logo "
                    className="w-30"
                />
                <h1
                    className="text-xl font-medium text-white"
                >
                    WAZANERLINGARA
                </h1>
            </div>
        </section>
    )
}

export default OnboadingIntroPage