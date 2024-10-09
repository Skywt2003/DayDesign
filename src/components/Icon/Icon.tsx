import React from "react";
import "./Icon.scss";
import * as RemixIcons from "@remixicon/react";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  useFont?: boolean;
}

// 使用 svg icon 很难和字体混排
// 使用字体 icon 则很难单独调整
// 所以此处提供两种选项，默认使用 svg icon

const pascal2kebab = (str: string): string =>
  str.replace(/(?<!^)(?=[A-Z0-9])/g, "-").toLowerCase();

const Icon = (props: IconProps) => {
  if (props.useFont) {
    const { name, useFont, className, ...restProps } = props;
    return (
      <i
        {...restProps}
        className={pascal2kebab(name) + (className ? " " + className : "")}
      />
    );
  } else {
    const { name, useFont, ...restProps } = props;
    const IconComponent = RemixIcons[
      name as keyof typeof RemixIcons
    ] as React.FC;
    return <IconComponent {...restProps} />;
  }
};

export default Icon;
