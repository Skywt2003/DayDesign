import React from "react";
import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  flat?: boolean;
}

const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={
      "button" +
      (props.className ? " " + props.className : "") +
      (props.flat ? " button--flat" : "")
    }
  >
    {props.children}
  </button>
);

export default Button;
