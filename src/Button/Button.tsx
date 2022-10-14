import React, { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";

export interface ButtonProps {
  children: ReactNode;
  asChild: boolean;
}
export const Button = ({ children, asChild }: ButtonProps) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-4 px-3 rounded text-black bg-cyan-900 font-semibold w-full transition-colors hover:bg-cyan-500"
      )}
    >
      {children}
    </Comp>
  );
};
