import { Button } from "@/components/ui/button";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description?: string;

  confirmText?: string;
  cancelText?: string;

  onConfirm: () => void;
  onClose: () => void;

  loading?: boolean;
}

export default function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onClose,
  loading = false,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-1000 bg-black/60 flex items-end lg:px-80">
      <div className="bg-gray-900 w-full p-4 rounded-t-2xl">
        <p className="text-center mb-2 font-medium">{title}</p>

        {description && (
          <p className="text-center text-sm mb-4 text-gray-400">
            {description}
          </p>
        )}

        <div className="flex flex-col gap-2">
          <Button
            className="py-2 rounded-full"
            onClick={onConfirm}
            disabled={loading}
          >
            {loading ? "Loading..." : confirmText}
          </Button>

          <Button
            onClick={onClose}
            variant={"outline"}
            className="py-2 rounded-full"
            disabled={loading}
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  );
}
