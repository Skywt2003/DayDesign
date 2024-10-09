import React, { useEffect, useRef, useState } from "react";
import "./Navbar.scss";

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  defaultHidden?: boolean;
}

const Navbar = ({
  defaultHidden = false,
  className,
  children,
  ...restProps
}: NavbarProps) => {
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
      {...restProps}
      className={
        "navbar" +
        (defaultHidden && !isSticked ? " navbar--hidden" : "") +
        (isSticked ? " navbar--sticked" : "") +
        (className ? " " + className : "")
      }
      ref={componentRef}
    >
      {children}
    </nav>
  );
};

export default Navbar;
