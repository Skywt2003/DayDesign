import React from "react";
import "./Input.scss";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => (
  <input type="text" className="input" {...props} />
);

export default Input;
