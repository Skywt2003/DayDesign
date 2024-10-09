import React, { useState } from "react";
import "./Tabs.scss";

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  tabs: string[];
  defaultSelected?: number;
  onSelectedChange?: (index: number) => void;
}

const Tabs = ({
  tabs,
  defaultSelected,
  onSelectedChange,
  className,
  ...restProps
}: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelected ?? 0);
  return (
    <div {...restProps} className={className ? "tabs " + className : "tabs"}>
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={
            "tabs__tab" + (selectedTab === index ? " tabs__tab--active" : "")
          }
          onClick={() => {
            setSelectedTab(index);
            onSelectedChange?.(index);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
