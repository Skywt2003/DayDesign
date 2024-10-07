import React from "react";
import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => (
  <button
    {...props}
    className={props.className ? "button " + props.className : "button"}
  >
    {props.children}
  </button>
);

export default Button;
