import React from "react";
import "./Icon.scss";
import * as RemixIcons from "@remixicon/react";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Icon = (props: IconProps) => {
  const IconComponent = RemixIcons[
    props.name as keyof typeof RemixIcons
  ] as React.FC;
  return <IconComponent {...props} />;
};

export default Icon;
