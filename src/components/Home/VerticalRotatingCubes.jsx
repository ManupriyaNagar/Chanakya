"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { User, Info, Headphones } from "lucide-react";
import RoseIcon from "./RoseIcon";
import "./cube.css";

export default function VerticalRotatingCubes() {
  const [face, setFace] = useState(0);
  const size = 350;
  const maxFace = 3;

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const direction = window.scrollY > lastScrollY ? 1 : -1;
      lastScrollY = window.scrollY;

      setFace((prev) => {
        let next = prev + direction;
        if (next > maxFace) next = 0;
        if (next < 0) next = maxFace;
        return next;
      });
    };

    const throttledScroll = () => {
      if (!scrolling) {
        scrolling = true;
        setTimeout(() => {
          handleScroll();
          scrolling = false;
        }, 250); // throttled every 250ms
      }
    };

    let scrolling = false;
    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  const cubeStyles = {
    width: `${size}px`,
    height: `${size}px`,
    transformStyle: "preserve-3d",
    transition: "transform 0.8s ease-in-out",
  };

  const faceStyles = {
    width: `${size}px`,
    height: `${size}px`,
  };

  const icons = [RoseIcon, User, Info, Headphones];

  return (
    <div className="relative flex min-h-[40vh] items-center justify-center  space-x-10">
      {/* Icon selectors */}
      <div className="mr-50 flex flex-col space-y-4 items-center">
        {icons.map((Icon, i) => (
          <button
            key={i}
            onClick={() => setFace(i)}
            className={`p-4 rounded-full ${
              face === i ? "bg-orange-500 text-white" : "bg-white text-gray-800"
            } hover:bg-orange-500 hover:text-white transition`}
          >
            <Icon className="w-6 h-6" />
          </button>
        ))}
      </div>

      {/* Cubes */}
      <div className="relative flex space-x-0 mt-40" style={{ perspective: "1000px" }}>
        <div
          className="relative"
          style={{
            ...cubeStyles,
            transform: `rotateX(${face * -90}deg)`,
          }}
        >
          <CubeFaces
            styles={faceStyles}
            images={["/box21.png", "/box11.png", "/box211.png", "/box10.jpg"]}
          />
        </div>
        <div
          className="relative"
          style={{
            ...cubeStyles,
            transform: `rotateX(${face * 90}deg)`,
          }}
        >
          <CubeFaces
            styles={faceStyles}
            images={["/box4.png", "/box31.png", "/box3.png", "/box8.jpg"]}
          />
        </div>
      </div>

      {/* Up/Down Buttons */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 space-y-4 z-10 ">
        <button
          onClick={() => setFace((prev) => (prev - 1 + 4) % 4)}
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-orange-500 text-black hover:text-white flex items-center justify-center shadow transition"
        >
          ↑
        </button>
        <button
          onClick={() => setFace((prev) => (prev + 1) % 4)}
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-orange-500 text-black hover:text-white flex items-center justify-center shadow transition"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

// Reusable cube face component
function CubeFaces({ styles, images }) {
  const labels = ["Front", "Back", "Top", "Bottom"];
  const half = styles.width.replace("px", "") / 2;

  const transforms = [
    `rotateY(0deg) translateZ(${half}px)`,
    `rotateY(180deg) translateZ(${half}px)`,
    `rotateX(90deg) translateZ(${half}px)`,
    `rotateX(-90deg) translateZ(${half}px)`,
  ];

  const imageTransforms = [
    "none",
    "rotateY(180deg)",
    "rotateX(0deg)",
    "rotateX(0deg)",
  ];

  return (
    <>
      {images.map((img, i) => (
        <div
          key={i}
          className="absolute flex items-center justify-center overflow-hidden"
          style={{
            ...styles,
            transform: transforms[i],
            backgroundColor: "white",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="w-full h-full"
            style={{ transform: imageTransforms[i] }}
          >
            <Image
              src={img}
              alt={labels[i]}
              width={styles.width.replace("px", "")}
              height={styles.height.replace("px", "")}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </>
  );
}
