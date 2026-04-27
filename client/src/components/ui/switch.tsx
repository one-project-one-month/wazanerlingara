import { cn } from "@/lib/util";
import { useGameSfxStore } from "@/stores/game-sfx-store";

type SwitchProps = {
    checked: boolean;
    onChange: (checked: boolean) => void;
    onLabel?: string;
    offLabel?: string;
    disabled?: boolean;
    className?: string;
    ariaLabel?: string;
};

export default function Switch({
    checked,
    onChange,
    onLabel = "On",
    offLabel = "Off",
    disabled = false,
    className = "",
    ariaLabel = "Toggle Switch",
}: SwitchProps) {
    const play = useGameSfxStore.getState().play;
    const handleToggle = () => {
        if (disabled) return;
        play("click", 0.5, false);
        onChange(!checked);
    };

    return (
        <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-label={ariaLabel}
            onClick={handleToggle}
            disabled={disabled}
            className={cn(`w-18 h-10 bg-netural-900 border border-white rounded-3xl relative p-1 flex shrink-0 items-center cursor-pointer transition-colors duration-300 
                ${checked ? "justify-start bg-primary-400 " : "justify-end"}
                ${className}`)}
        >
            <span
                className={`absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white border border-amber-100 transition-transform ease-in-out duration-300
                    ${checked ? "translate-x-7" : "translate-x-0"}`}
            />
            <span className="text-base px-0.5">  {checked ? onLabel : offLabel} </span>
        </button>
    );
}