import React, { useRef } from "react";
import "./flexScroll.css";

const FlexScroll = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -200, // Adjust the scroll amount as needed
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 200, // Adjust the scroll amount as needed
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="scroll-container">
      <button className="scroll-button" onClick={scrollLeft}>
        {"<"}
      </button>
      <div className="flex-container" ref={containerRef}>
        {/* Your flex items go here */}
      </div>
      <button className="scroll-button" onClick={scrollRight}>
        {">"}
      </button>
    </div>
  );
};

export default FlexScroll;
