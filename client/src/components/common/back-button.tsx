import backButtonIcon from "@/assets/svg/back-button.svg";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      className="fixed left-4 top-4 z-20 rounded-xl md:left-10 md:top-6 cursor-pointer duration-200"
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
