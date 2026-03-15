import * as React from "react";
import { cn } from "@/lib/util";
import IconInfoCircle from "@/assets/icons/icon-info-circle";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "success" | "error";
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div className="relative">
        <input
          className={cn(
            "flex h-16 w-full rounded-full text-gray-300 bg-background-400 border-4 px-5",
            "focus:outline-none focus:ring-0",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            variant === "default" && "border-netural-500",
            variant === "success" &&
              "border-green-500  shadow-[0px_0px_8px_1px_#7BCE54]",
            variant === "error" &&
              "border-red-500 shadow-[0px_0px_8px_1px_#F97C7C]",
            className,
          )}
          ref={ref}
          {...props}
        />
        {variant === "error" && (
          <IconInfoCircle className="absolute right-4 top-1/2 text-primary-500 -translate-y-1/2" />
        )}
      </div>
    );
  },
);
Input.displayName = "Input";
