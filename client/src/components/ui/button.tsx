import { cn } from "@/lib/util";
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        className={cn(
          "relative group active:scale-95 duration-300 flex",
          props.disabled && "cursor-not-allowed pointer-events-none",
        )}
      >
        <button
          ref={ref}
          className={cn(
            "px-4 py-4 h-16 min-w-24 w-full shadow-[inset_-4px_-4px_8px_rgba(255,255,255,0.64),inset_4px_4px_8px_rgba(255,255,255,0.64)] duration-300 hover:border-4 rounded-full text-white",
            variant === "default" &&
              "bg-primary-500 active:bg-primary-400 disabled:bg-primary-200 disabled:cursor-not-allowed disabled:pointer-events-none",
            variant === "outline" &&
              "bg-transparent active:bg-background-200 disabled:bg-background-400 disabled:cursor-not-allowed disabled:pointer-events-none",
            className,
          )}
          {...props}
        />
        <svg
          width="24"
          height="23"
          viewBox="0 0 24 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1 left-4"
        >
          <ellipse
            cx="15.1509"
            cy="7.70769"
            rx="6"
            ry="9.69819"
            transform="rotate(50.5883 15.1509 7.70769)"
            fill="white"
          />
          <circle
            cx="3.51616"
            cy="18.6084"
            r="3.516"
            transform="rotate(50.5883 3.51616 18.6084)"
            fill="#E8E8E8"
          />
        </svg>

        <svg
          width="14"
          height="12"
          viewBox="0 0 14 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute bottom-1 right-4"
        >
          <ellipse
            cx="6.75576"
            cy="5.51548"
            rx="4.17355"
            ry="7.65595"
            transform="rotate(55.8233 6.75576 5.51548)"
            fill="white"
            fillOpacity="0.9"
          />
        </svg>
      </div>
    );
  },
);

Button.displayName = "Button";
