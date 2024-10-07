import React from "react";
import "./Textarea.scss";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = (props: TextareaProps) => (
  <textarea className="textarea" {...props} />
);

export default Textarea;
