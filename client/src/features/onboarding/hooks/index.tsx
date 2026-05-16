import { useState } from "react"


const useOnboarding = () => {
    const [completed, setCompleted] = useState(() => (
        localStorage.getItem("onboarding") === "completed"))


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