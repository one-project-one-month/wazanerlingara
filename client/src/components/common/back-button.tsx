import backButtonIcon from "@/assets/svg/back-button.svg";
import { cn } from "@/lib/util";
import { useNavigate } from "react-router-dom";

const BackButton = (
  { className }: { className?: string }
) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className={cn(`inline-flex shrink-0 cursor-pointer rounded-xl duration-200 md:fixed md:left-10 md:top-6 md:z-20 ${className}`)}
      aria-label="Back"
    >
      <img src={backButtonIcon} alt="Back" className="size-10" />
    </button>
  );
};

export default BackButton;
