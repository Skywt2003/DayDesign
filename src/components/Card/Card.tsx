import React from "react";
import "./Card.scss";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => (
  <div
    {...props}
    className={props.className ? "card " + props.className : "card"}
  >
    {props.children}
  </div>
);

export default Card;
