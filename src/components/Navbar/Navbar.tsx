import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {}

const Navbar = (props: NavbarProps) => {
  const [isSticked, setIsSticked] = useState(false);
  const componentRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (componentRef.current) {
      const rect = componentRef.current.getBoundingClientRect();
      setIsSticked(rect.top <= 0);
    }
  };

  return (
    <nav
      className={"navbar" + (isSticked ? " navbar--sticked" : "")}
      ref={componentRef}
      {...props}
    >
      <div className="navbar__content">{props.children}</div>
    </nav>
  );
};

export default Navbar;
