"use client";

import { useState } from "react";
import MenuOverlay from "./MenuOverlay";
import MobileMenuBtn from "./MobileMenuBtn";
import { useAnimationControls } from "framer-motion";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start(isOpen ? "closed" : "open");
    setIsOpen((curVal) => !curVal);
  };

  return (
    <div className="flex h-full items-baseline">
      <MobileMenuBtn handleClick={handleClick} controls={controls} />
      <MenuOverlay controls={controls} />
    </div>
  );
};

export default MobileMenu;
