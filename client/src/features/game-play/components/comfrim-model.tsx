import { Button } from "@/components/ui/button.tsx";
import { useAppNavigation } from "@/lib/use-app-navigation";
import { useGameConfigStore } from "@/stores/game-config-store";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConfirmationModal = ({
    isOpen,
    onClose,
}: ModalProps) => {
    const reset = useGameConfigStore(s => s.resetGameConfig)
    const { goTo } = useAppNavigation()

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <button
                type="button"
                className="absolute inset-0 bg-black/60 backdrop-blur-sm w-full cursor-default"
                onClick={onClose}
                aria-label="Close modal"
            />

            <div className="relative bg-black text-white p-6 rounded-3xl w-full max-w-md flex flex-col items-center gap-4 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] border border-white">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl">‌ထွက်မှာ သေချာပြီလား</h2>
                    <p>အခုထွက်လိုက်ရင် ကစားလက်စ ပွဲစဉ် ပျက်သွားပါလိမ့်မယ်။</p>
                </div>

                <div className="flex w-full gap-4 flex-col">
                    <Button className="cursor-pointer text-xl" onClick={() => {
                        reset()
                        goTo("/")
                    }}>
                        ထွက်မယ်
                    </Button>
                    <Button
                        variant="outline"
                        className="cursor-pointer text-xl"
                        onClick={onClose}
                    >
                        ဆက်ကစားမယ်
                    </Button>
                </div>
            </div>
        </div>,
        document.body,
    );
};

export default ConfirmationModal;
