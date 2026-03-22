import backButtonIcon from "@/assets/svg/back-button.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="inline-flex shrink-0 cursor-pointer rounded-xl duration-200 md:fixed md:left-10 md:top-6 md:z-20"
      aria-label="Back"
    >
      <img
        src={backButtonIcon}
        alt="Back"
        className="h-9 w-9 md:h-10 md:w-10"
      />
    </button>
  );
};

export default BackButton;
