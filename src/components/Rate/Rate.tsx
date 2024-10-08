import React, { useState } from "react";
import "./Rate.scss";
import Icon from "@components/Icon";

export interface RateProps extends React.HTMLAttributes<HTMLElement> {
  value: number;
  changeable: boolean;
  onRate: (rate: number) => void;
}

const Rate = (props: RateProps) => {
  return (
    <div
      {...props}
      className={props.className ? "rate " + props.className : "rate"}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <Icon
          name={i <= props.value ? "RiStarFill" : "RiStarLine"}
          key={i}
          className={
            "rate__star" +
            (props.changeable ? " cursor-pointer" : "") +
            (i <= props.value ? " rate__star--active" : "")
          }
          onClick={() => props.changeable && props.onRate(i)}
        />
      ))}
    </div>
  );
};

export default Rate;
