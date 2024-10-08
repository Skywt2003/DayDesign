import React from "react";
import "./Card.scss";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "normal" | "bento" | "in-content";
}

const Card = (props: CardProps) => (
  <div
    {...props}
    className={
      "card" +
      (props.className ? " " + props.className : "") +
      (props.type ? " card--" + props.type : "")
    }
  >
    {props.children}
  </div>
);

export default Card;
