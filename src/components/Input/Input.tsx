import React from "react";
import "./Input.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...restProps }: InputProps) => (
  <input
    type="text"
    {...restProps}
    className={className ? "input " + className : "input"}
  />
);

export default Input;
