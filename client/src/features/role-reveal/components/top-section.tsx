import backIcon from "@/assets/svg/Back.svg";

type Props = {
  timeLeft: number;
  isResetting: boolean;
  onBack: () => void;
};

export default function TopSection({ timeLeft, isResetting, onBack }: Props) {
  const progressPercent = (timeLeft / 10) * 100;

  return (
    <div className="w-full">
      <div className="flex items-center gap-3">
        <img
          onClick={onBack}
          src={backIcon}
          alt="back"
          className="w-6 h-6 md:w-12 md:h-12"
        />

        <div className="flex-1 h-4 md:h-7 lg:h-5 bg-gray-700 rounded-full overflow-hidden">
          <div
            className={`h-full ${
              isResetting ? "" : "transition-[width] duration-1000 ease-linear"
            } ${timeLeft <= 3 ? "bg-red-500" : "bg-green-500"}`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
