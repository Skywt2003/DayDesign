import React from "react";
import "./Textarea.scss";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps) => (
  <textarea
    {...props}
    className={props.className ? "textarea " + props.className : "textarea"}
  />
);

export default Textarea;
