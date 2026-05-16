import { Button } from "@/components/ui/button.tsx";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    isSuccess: boolean;
}

const ResponseModel = ({
    isOpen,
    onClose,
    isSuccess
}: ModalProps) => {


    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <button
                type="button"
                className="absolute inset-0 bg-black/60 backdrop-blur-sm w-full cursor-default"
                onClick={onClose}
                aria-label="Close modal"
            />

            <div className="relative bg-black text-white p-6 rounded-3xl w-full max-w-md  space-y-6 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] border border-white">
                {
                    isSuccess
                        ? <>
                            <div className="text-center space-y-4 ">
                                <h2 className="text-3xl">‌✅ ပေးပို့မှု အောင်မြင်ပါသည်
                                </h2>
                                <p>သင့်အကြံပြုချက်များကို ကျွန်ုပ်တို့ တန်ဖိုးထားပါသည်။ ကျေးဇူးတင်ပါသည်။
                                </p>
                            </div>
                            <Button
                                variant="outline"
                                className="cursor-pointer text-xl w-full"
                                onClick={onClose}
                            >
                                အိုကေ
                            </Button>
                        </>
                        : <>
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl">⚠️ ပေးပို့မှု မအောင်မြင်ပါ
                                </h2>
                                <p>
                                    နည်းပညာဆိုင်ရာ အခက်အခဲတစ်ခုကြောင့် သင့်မက်ဆေ့ချ်ကို ပေးပို့၍ မရသေးပါ။ သင်၏ အင်တာနက်ချိတ်ဆက်မှုကို စစ်ဆေးပြီး ခဏအကြာတွင် ပြန်လည်ကြိုးစားပေးပါရန် မေတ္တာရပ်ခံအပ်ပါသည်။
                                </p>
                            </div>
                            <div className="flex w-full gap-4 flex-col">
                                <Button className="cursor-pointer text-xl"
                                    onClick={onClose}>
                                    ထပ်မံကြိုးစားမယ်
                                </Button>
                                <Button
                                    variant="outline"
                                    className="cursor-pointer text-xl"
                                    onClick={onClose}
                                >
                                    မလုပ်တော့ပါ
                                </Button>
                            </div>

                        </>
                }




            </div>
        </div>,
        document.body,
    );
};

export default ResponseModel;
