import React, { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";

const GoTop = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setShowGoTop] = useState("goTopHidden");

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, [scrollPosition]);

  const handleVisibleButton = () => {
    const position = window.scrollY;
    setScrollPosition(position);

    if (position > 50) {
      setShowGoTop("goTop");
    } else {
      setShowGoTop("goTopHidden");
    }
  };

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button className={showGoTop} onClick={handleScrollUp}>
        <SlArrowUp />
      </button>
    </>
  );
};

export default GoTop;
