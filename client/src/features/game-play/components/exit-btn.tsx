import { Button } from "@/components/ui/button"
import { useState } from "react"
import ConfirmationModal from "./comfrim-model"

const ExitButton = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="absolute top-4 right-4">
                <Button
                    variant={'outline'}
                    onClick={() => setIsOpen(true)}
                    className="min-w-0 w-12 rounded-2xl py-0 h-12 text-4xl"
                >
                    X
                </Button>
            </div>
            <ConfirmationModal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    )
}

export default ExitButton