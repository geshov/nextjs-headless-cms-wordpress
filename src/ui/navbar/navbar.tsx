"use client";

import { useState, useEffect } from "react";
import { Logo } from "./logo/logo";
import { Theme } from "./theme/theme";

export function Navbar() {
  const [scroll, setScroll] = useState(() =>
    typeof window === "undefined" ? 0 : window.scrollY
  );

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    addEventListener("scroll", handleScroll);
    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-10 ${
        scroll && "backdrop-blur-md shadow-md"
      }`}>
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-4 py-3">
        <Logo />
        <Theme />
      </div>
    </div>
  );
}
