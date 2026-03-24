import { cn } from "@/lib/util";
import { animate } from "animejs";
import { useEffect, useRef } from "react";

interface ProgressProps {
  value: number;
  max: number;
  className?: string;
}

function Progress({ value, max, className }: ProgressProps) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(".bar", {
      width: [
        {
          to: `${(value / max) * 100}%`,
          duration: 1500,
          ease: "inOut(3)",
        },
      ],
      loop: false,
    });
  }, [value, max]);

  return (
    <div
      ref={barRef}
      className={cn(
        "relative h-6 w-full border-2  border-white overflow-hidden rounded-full bg-background-400",
        className,
      )}
    >
      <div
        className="h-full bar shadow-[inset_0px_3px_2px_#C2E8B0] bg-success-500"
        style={{ width: 0 }}
      />
    </div>
  );
}

export default Progress;
