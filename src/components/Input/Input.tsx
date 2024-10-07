import React from "react";
import "./Input.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => (
  <input
    {...props}
    type="text"
    className={props.className ? "input " + props.className : "input"}
  />
);

export default Input;
