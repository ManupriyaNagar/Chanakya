"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const imagesLeft = ["/box211.png", "/box5.jpg", "/box211.png", "/box1.png", "/box211.png", "/box10.jpg"];
const imagesRight = ["/box8.jpg", "/box3.png", "/box9.jpg", "/box3.png", "/box4.png", "/box3.png"];

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 900);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full h-full relative x">
      {images.map((img, idx) => (
        <Image
          key={idx}
          src={img}
          alt={`Slide ${idx}`}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};

export default function ImageSliderSection() {
  return (
    <div className="flex h-[80vh] gap-x-4 bg-white">
      {/* Left Section */}
      <div className="w-3/2 h-[80vh] relative rounded-xl overflow-hidden px-10">
        <ImageSlider images={imagesLeft} />
      </div>

      {/* Right Section */}
      <div className="w-3/2 h-[80vh] relative rounded-xl overflow-hidden px-10">
        <ImageSlider images={imagesRight} />
      </div>
    </div>
  );
}
