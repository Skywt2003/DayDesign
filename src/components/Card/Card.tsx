import React from "react";
import "./Card.scss";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

const Card = (props: CardProps) => (
  <div className="card" {...props}>
    {props.children}
  </div>
);

export default Card;
