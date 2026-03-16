import { useState } from "react"


const useOnboarding = () => {
    const [completed, setCompleted] = useState(() => {
        const saved = localStorage.getItem("onboarding");
        return saved === "completed"
    })


    const finish = () => {
        localStorage.setItem("onboarding", "completed")
        setCompleted(true)
    }

    const reset = () => {
        localStorage.removeItem("onboarding")
    }

    return { completed, finish, reset }
}

export default useOnboarding