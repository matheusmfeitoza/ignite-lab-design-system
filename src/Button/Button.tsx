import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}
export const Button = ({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 rounded text-black bg-cyan-900 font-semibold w-full transition-colors hover:bg-cyan-500",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
};
