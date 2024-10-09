import React from "react";
import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  flat?: boolean;
}

const Button = ({ flat, className, children, ...restProps }: ButtonProps) => (
  <button
    {...restProps}
    className={
      "button" +
      (className ? " " + className : "") +
      (flat ? " button--flat" : "")
    }
  >
    {children}
  </button>
);

export default Button;
