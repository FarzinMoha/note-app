import { btnProps } from "@/type/type";
import React, { ButtonHTMLAttributes } from "react";

const Button: React.FC<ButtonHTMLAttributes<HTMLButtonElement> & btnProps> = ({
  children,
  rootClass,
  ...props
}) => {
  return (
    <button
      className={`w-full sm:w-[300px] p-4 bg-secondry border text-primary border-transparent rounded-xl duration-200 hover:bg-transparent hover:border hover:border-secondry hover:text-secondry m-4 ${rootClass}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
