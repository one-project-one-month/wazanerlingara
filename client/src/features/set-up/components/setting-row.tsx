import Switch from "@/components/ui/switch";
import type { SetupPageSettingItemType } from "@/types/index.types";

function SettingRow({
    icon,
    label,
    hasToggle = false,
    isOn = false,
    onToggle,
}: Omit<SetupPageSettingItemType, "id"> & {
    isOn?: boolean;
    onToggle?: () => void;
}) {
    return (
        <div className="flex h-17 items-center justify-between rounded-3xl bg-white/10 px-4 py-12 sm:h-18 sm:px-5">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                <span className="shrink-0 text-netural-100">{icon}</span>
                <span className="truncate text-[19px] text-netural-100 sm:text-[22px]">
                    {label}
                </span>
            </div>

            {hasToggle && onToggle ? (
                <Switch checked={isOn} onChange={onToggle} ariaLabel={label} />
            ) : null}
        </div>
    );
}
export default SettingRow;