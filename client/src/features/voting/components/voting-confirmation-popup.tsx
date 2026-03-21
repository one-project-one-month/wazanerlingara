import { createPortal } from "react-dom";
import { Button } from "@/components/ui/button.tsx";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  playerName: string;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  playerName,
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

      <div className="relative bg-black text-white p-6 rounded-3xl w-full max-w-md flex flex-col items-center gap-4 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.2)] border border-white">
        <div className="text-center space-y-2">
          <h2 className="text-3xl">ဒီတစ်ယောက်က Imposter ဆိုတာ သေချာပြီလား</h2>
          <p className="text-lg">
            သင်သည် <span className="text-primary font-bold">{playerName}</span>{" "}
            ကို မဲပေးရန် ရွေးချယ်ထားပါသည်။
          </p>
        </div>

        <div className="flex w-full gap-4 flex-col">
          <Button className="cursor-pointer text-xl" onClick={onConfirm}>
            သေချာတယ်
          </Button>
          <Button
            variant="outline"
            className="cursor-pointer text-xl"
            onClick={onClose}
          >
            ပြန်စဉ်းစားမယ်
          </Button>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ConfirmationModal;
