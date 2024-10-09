import React from "react";
import "./Card.scss";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;
type DivProps = React.HTMLAttributes<HTMLDivElement>;
type DivAndA = DivProps & AnchorProps;

export interface CardProps extends DivAndA {
  href?: string;
  modifiers?: string[];
}

const Card = ({
  href,
  modifiers = [],
  children,
  className,
  ...restProps
}: CardProps) => {
  const Tag = href ? "a" : "div";
  if (href) modifiers.push("clickable");

  return (
    <Tag
      {...restProps}
      {...(href ? { href } : {})}
      className={
        "card" +
        modifiers.map((modifier) => ` card--${modifier}`).join("") +
        (className ? " " + className : "")
      }
    >
      {children}
    </Tag>
  );
};

export default Card;
