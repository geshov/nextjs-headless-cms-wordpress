/* eslint-disable react-hooks/set-state-in-effect */

"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo/logo";
import { Theme } from "./theme/theme";

export function Navbar() {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    handleScroll();
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 ${
        scroll && "backdrop-blur-md shadow-md"
      }`}>
      <div className="container flex justify-between items-center w-full py-3">
        <Logo />
        <Theme />
      </div>
    </div>
  );
}
