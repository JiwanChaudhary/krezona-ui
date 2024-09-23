import { cn } from "@/libs/utils";
import React, { forwardRef } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: string | React.ReactNode;
  appearacnce?: "primary";
  type?: "button" | "reset" | "submit";
  className?: string;
};

const KrezonaButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      type,
      appearacnce = "primary",
      className,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        type={type ?? "button"}
        className={cn(
          "rounded-lg px-8 py-2 font-medium outline-none text-nowrap focus-visible:outline-gray-950",
          getButtonAppreance(appearacnce),
          className
        )}
        {...rest}
        tabIndex={0}
      >
        {children}
      </button>
    );
  }
);

KrezonaButton.displayName = "Button";

export default KrezonaButton;

// get button appreance props
function getButtonAppreance(appearacnce: string) {
  switch (appearacnce) {
    case "primary":
      return "bg-krezonaBlack text-white";
    default:
      return "bg-krezonaBlack text-white";
  }
}
