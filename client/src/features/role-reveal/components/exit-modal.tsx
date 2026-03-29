import { Button } from "@/components/ui/button.tsx";

interface Props {
  onConfirmExit: () => void;
  onClose: () => void;
}
export default function ExitModal({ onConfirmExit, onClose }: Props) {
  return (
    <div className="lg:px-80 fixed inset-0 bg-black/60 flex items-end">
      <div className="bg-gray-900 w-full p-4 rounded-t-2xl">
        <p className="text-center mb-2">ထွက်မှာသေချာပြီလား</p>
        <p className="text-center text-sm mb-4">
          အခုထွက်လိုက်ရင် ကစားလက်စပွဲစဉ် ပျက်သွားပါလိမ့်မယ်
        </p>

        <div className="flex flex-col gap-2">
          <Button className="flex-1 py-2 rounded-full" onClick={onConfirmExit}>
            ထွက်မယ်
          </Button>
          <Button
            onClick={onClose}
            className="flex-1 bg-gray-700 py-2 rounded-full"
          >
            ဆက်ကစားမယ်
          </Button>
        </div>
      </div>
    </div>
  );
}
