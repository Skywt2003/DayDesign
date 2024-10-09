import React, { useState } from "react";
import "./Rate.scss";
import Icon from "@components/Icon";

export interface RateProps extends React.HTMLAttributes<HTMLElement> {
  value: number;
  changeable: boolean;
  onRate: (rate: number) => void;
}

const Rate = ({
  value,
  changeable,
  onRate,
  className,
  ...restProps
}: RateProps) => {
  return (
    <div {...restProps} className={"rate" + (className ? " " + className : "")}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon
          name={i <= value ? "RiStarFill" : "RiStarLine"}
          key={i}
          className={
            "rate__star" +
            (changeable ? " cursor-pointer" : "") +
            (i <= value ? " rate__star--active" : "")
          }
          onClick={() => changeable && onRate(i)}
        />
      ))}
    </div>
  );
};

export default Rate;
