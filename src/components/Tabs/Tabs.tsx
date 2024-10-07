import React, { useState } from "react";
import "./Tabs.scss";

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
  tabs: string[];
  defaultSelected?: number;
  onSelectedChange?: (index: number) => void;
}

const Tabs = (props: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(props.defaultSelected ?? 0);
  return (
    <div className="tabs">
      {props.tabs.map((tab, index) => (
        <div
          key={index}
          className={
            "tabs__tab" + (selectedTab === index ? " tabs__tab--active" : "")
          }
          onClick={() => {
            setSelectedTab(index);
            props.onSelectedChange?.(index);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
