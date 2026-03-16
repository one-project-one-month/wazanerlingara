import * as React from "react";
import { cn } from "@/lib/util";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);

    const combinedRef = (node: HTMLTextAreaElement) => {
      textareaRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref)
        (ref as React.MutableRefObject<HTMLTextAreaElement | null>).current =
          node;
    };

    const startResize = (e: React.MouseEvent) => {
      e.preventDefault();

      const textarea = textareaRef.current;
      if (!textarea) return;

      const startY = e.clientY;
      const startHeight = textarea.offsetHeight;

      const onMouseMove = (moveEvent: MouseEvent) => {
        const newHeight = startHeight + (moveEvent.clientY - startY);
        textarea.style.height = `${newHeight}px`;
      };

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onMouseMove);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
    };

    return (
      <div className="relative w-full">
        <textarea
          ref={combinedRef}
          className={cn(
            "flex min-h-[120px] w-full resize-none rounded-3xl border-4 border-white bg-background-300 p-3 pr-8 text-gray-300",
            "focus-visible:outline-none",
            "disabled:cursor-not-allowed disabled:opacity-50",
            className,
          )}
          {...props}
        />
        <div
          onMouseDown={startResize}
          className="absolute bottom-4 right-4 cursor-nwse-resize text-gray-400 select-none"
        >
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0605 5.06055L5.06055 10.0605L4 9L9 4L10.0605 5.06055ZM9.06055 1.06055L1.06055 9.06055L0 8L8 0L9.06055 1.06055Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
