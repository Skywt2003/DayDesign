import React from "react";
import "./Textarea.scss";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = ({ className, ...restProps }: TextareaProps) => (
  <textarea
    {...restProps}
    className={className ? "textarea " + className : "textarea"}
  />
);

export default Textarea;
