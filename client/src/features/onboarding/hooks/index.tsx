import { useEffect, useState } from "react"


const useOnboarding = () => {
    const [completed, setCompleted] = useState(false)
    useEffect(() => {
        const saved = localStorage.getItem("onboarding");
        setCompleted(saved === "completed");
    }, [])

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