import { Button } from "@/components/ui/button.tsx";

type Props = {
  currentPlayer: number;
  rolesLength: number;
  nextPlayer: any;
  confirmed: boolean;
  revealed: boolean;
  timeLeft: number;
  onConfirm: () => void;
  onNext: () => void;
};

export default function BottomSection({
  currentPlayer,
  rolesLength,
  nextPlayer,
  confirmed,
  revealed,
  timeLeft,
  onConfirm,
  onNext,
}: Props) {
  return (
    <div className="w-full max-w-175 lg:max-w-150 mx-auto">
      {currentPlayer + 1 < rolesLength ? (
        <div className="flex flex-col items-center gap-2 mt-4">
          {(confirmed || timeLeft <= 0) && (
            <p className="text-sm text-gray-300">
              နောက်တစ်ယောက် - {nextPlayer.name}
            </p>
          )}

          <div className="w-full">
            {revealed && !confirmed ? (
              <Button onClick={onConfirm}>ရပြီ</Button>
            ) : (
              <Button disabled={!confirmed} onClick={onNext}>
                နောက် တစ်ယောက်
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full mt-4">
          {revealed && !confirmed ? (
            <Button onClick={onConfirm}>ရပြီ</Button>
          ) : (
            <Button disabled={!confirmed}>ဂိမ်း စ ဆော့ မယ်</Button>
          )}
        </div>
      )}
    </div>
  );
}
