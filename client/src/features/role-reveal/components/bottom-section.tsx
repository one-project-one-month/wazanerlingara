import { Button } from "@/components/ui/button.tsx";

interface Props {
  currentPlayerIndex: number;
  playersLength: number;
  nextPlayerName: string;
  confirmed: boolean;
  revealed: boolean;
  timeLeft: number;
  handleConfirm: () => void;
  handleClickNext: () => void;
}

export default function BottomSection({
  currentPlayerIndex,
  playersLength,
  nextPlayerName,
  confirmed,
  revealed,
  timeLeft,
  handleConfirm,
  handleClickNext,
}: Props) {
  return (
    <div className="w-full max-w-175 lg:max-w-150 mx-auto">
      {currentPlayerIndex < playersLength - 1 ? (
        <div className="flex flex-col items-center gap-2 mt-4">
          {(confirmed || timeLeft <= 0) && (
            <p className="text-sm text-gray-300">
              နောက်တစ်ယောက် - {nextPlayerName}
            </p>
          )}

          <div className="w-full">
            {revealed && !confirmed ? (
              <Button onClick={handleConfirm}>ရပြီ</Button>
            ) : (
              <Button disabled={!confirmed} onClick={handleClickNext}>
                နောက် တစ်ယောက်
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full mt-4">
          {revealed && !confirmed ? (
            <Button onClick={handleConfirm}>ရပြီ</Button>
          ) : (
            <Button disabled={!confirmed}>ဂိမ်း စ ဆော့ မယ်</Button>
          )}
        </div>
      )}
    </div>
  );
}
