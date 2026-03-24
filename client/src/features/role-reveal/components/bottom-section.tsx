import { Button } from "@/components/ui/button.tsx";

export type Role = {
  role: "Imposter" | "Player";
  word: string | null;
};

export type Player = {
  name: string;
  avatar: string;
};
type Props = {
  revealed: boolean;
  confirmed: boolean;
  hasNext: boolean;
  nextPlayer?: Player;
  onConfirm: () => void;
  onNext: () => void;
};

export default function BottomControls({
  revealed,
  confirmed,
  hasNext,
  nextPlayer,
  onConfirm,
  onNext,
}: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      {confirmed && nextPlayer && <p>နောက်တစ်ယောက် - {nextPlayer.name}</p>}

      {revealed && !confirmed ? (
        <Button onClick={onConfirm}>ရပြီ</Button>
      ) : (
        <Button disabled={!confirmed} onClick={onNext}>
          {hasNext ? "နောက် တစ်ယောက်" : "ဂိမ်း စ ဆော့ မယ်"}
        </Button>
      )}
    </div>
  );
}
