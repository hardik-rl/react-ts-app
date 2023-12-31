import { clsx } from "clsx";
import { TitleProps } from "../type/type";
import React from "react";

const Button = ({ title, onClick, type, variant, className }: TitleProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(`btn btn-${variant}`, className)}
    >
      {title}
    </button>
  );
};

export default Button;
