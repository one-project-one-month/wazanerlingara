import { useNavigate } from 'react-router-dom'
import backButtonIcon from "@/assets/svg/back-button.svg";
import { cn } from '@/lib/util';

type Props = {
    className?: string
}
const BackButton = ({ className }: Props) => {
    const navigate = useNavigate()
    return (
        <button
            type="button"
            onClick={() => navigate(-1)}
            className={cn(`cursor-pointer ${className}`)}
            aria-label="Back"
        >
            <img
                src={backButtonIcon}
                alt="Back"
                className="h-9 w-9 md:h-10 md:w-10"
            />
        </button>
    )
}

export default BackButton