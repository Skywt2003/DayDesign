import React from "react";
import "./Button.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = (props: ButtonProps) => (
  <button className="button" {...props}>
    {props.children}
  </button>
);

export default Button;
