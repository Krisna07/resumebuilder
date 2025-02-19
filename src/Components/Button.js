import React from "react";
import clsx from "clsx";
import { cva } from "class-variance-authority";

const buttonStyles = cva(
  "px-[16px] py-[4px] h-fit rounded-full transition-all ease-in-out duration-300 font-semibold shadow-md flex items-center gap-1",
  {
    variants: {
      variant: {
        primary: "bg-gray-900 text-white hover:bg-gray-700 text-white",
        secondary: "bg-gray-100 text-white hover:bg-gray-300 text-black",
        success:
          "bg-green-500 text-white hover:bg-green-600 uppercase text-gray-900",
        danger: "bg-red-500 text-white hover:bg-red-600",
      },
      size: {
        small: "text-[12px]",
        medium: "text-[14px]",
        large: "text-[16px]",
      },
      fullWidth: {
        true: "w-full",
        false: "w-fit",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
      fullWidth: false,
    },
  }
);

const Button = ({ variant, size, fullWidth, children, ...props }) => {
  return (
    <button
      className={clsx(buttonStyles({ variant, size, fullWidth }))}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
