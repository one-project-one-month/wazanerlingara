const OffToggle = ({
    isOn,
    onToggle,
    label,
}: {
    isOn: boolean;
    onToggle?: () => void;
    label: string;
}) => {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={isOn}
            aria-label={`${label} toggle`}
            onClick={onToggle}
            className={`relative ml-3 inline-flex h-12 w-24 shrink-0 items-center rounded-full border px-1 font-semibold tracking-wider transition-colors duration-300 ${isOn
                ? "border-primary-400 bg-primary-500 text-netural-100"
                : "border-netural-700 bg-background-300 text-netural-100"
                }`}
        >
            <span
                className={`pointer-events-none absolute left-1 top-1/2 h-10 w-10 -translate-y-1/2 rounded-full shadow-[inset_0_1px_4px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out ${isOn ? "translate-x-12 bg-white" : "translate-x-0 bg-netural-100"
                    }`}
            />
            <span className="relative z-10 flex w-full items-center justify-between px-2 text-[16px] leading-none">
                <span
                    className={`transition-opacity duration-200 ${isOn ? "opacity-100" : "opacity-50"}`}
                >
                    ON
                </span>
                <span
                    className={`transition-opacity duration-200 ${isOn ? "opacity-50" : "opacity-100"}`}
                >
                    OFF
                </span>
            </span>
        </button>
    );
};
export default OffToggle;