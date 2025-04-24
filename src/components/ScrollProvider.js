"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollProvider({ children }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const scroll = new LocomotiveScroll({
      el: containerRef.current,
      smooth: true,
      // optional tweaks:
      // multiplier: 0.8,
      // inertia: 0.7,
    });
    return () => scroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={containerRef}>
      {children}
    </div>
  );
}
