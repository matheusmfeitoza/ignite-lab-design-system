import { Slot } from "@radix-ui/react-slot";
import React, { InputHTMLAttributes, ReactNode } from "react";

export interface TextInputRootProps {
  children: ReactNode;
}

const TextInputRoot = (props: TextInputRootProps) => {
  return (
    <div className="flex items-center h-12 gap-3 w-full py-4 px-3 bg-gray-700 rounded  outline-none  focus-within:ring-2 ring-cyan-500">
      {props.children}
    </div>
  );
};

export interface TextInputIconProps {
  children: ReactNode;
}

const TextInputIcon = (props: TextInputIconProps) => {
  return <Slot className="w-6 h-6 text-gray-500">{props.children}</Slot>;
};
export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextInputInput = (props: TextInputProps) => {
  return (
    <input
      {...props}
      className="placeholder:text-gray-500 text-gray-200 text-xs bg-transparent outline-none w-full "
    />
  );
};

export const TextInput = {
  TextInputInput,
  TextInputIcon,
  TextInputRoot,
};
