"use client";
import { Calendar, User, Info, Headphones } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function VerticalRotatingCubes() {
  const [face, setFace] = useState(0); // 0: Front, 1: Top, 2: Back, 3: Bottom
  const size = 350;

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

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white space-x-10">

      {/* Sidebar Controls */}
      <div className="mr-50 flex flex-col space-y-4 items-center">
        {[Calendar, User, Info, Headphones].map((Icon, i) => (
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

      {/* Cube Container */}
      <div className="relative flex space-x-0" style={{ perspective: "1000px" }}>
        <div
          className="relative"
          style={{
            ...cubeStyles,
            transform: `rotateX(${face * -90}deg)`,
          }}
        >
          <CubeFaces styles={faceStyles} />
        </div>
        <div
          className="relative"
          style={{
            ...cubeStyles,
            transform: `rotateX(${face * 90}deg)`,
          }}
        >
          <CubeFaces styles={faceStyles} prefix="2" isImage />
        </div>
      </div>

      {/* Up/Down Arrows */}
      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 space-y-4 z-10">
        <button className="w-12 h-12 rounded-full bg-gray-200 hover:bg-orange-500 text-black hover:text-white flex items-center justify-center shadow transition">
          ↑
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-200 hover:bg-orange-500 text-black hover:text-white flex items-center justify-center shadow transition">
          ↓
        </button>
      </div>
    </div>
  );
}

//Cube Face Component
function CubeFaces({ styles, prefix = "", isImage = false }) {
    const faces = [
        { label: "Front", img: "/box1.png", icon: Calendar, heading: "Welcome to the Front", para: "This is the front side of the cube." },
        { label: "Back", img: "/box2.png", icon: User, heading: "User Info", para: "This is the back side of the cube." },
        { label: "Top", img: "/box3.png", icon: Info, heading: "Information", para: "This is the top side of the cube." },
        { label: "Bottom", img: "/box4.png", icon: Headphones, heading: "Audio", para: "This is the bottom side of the cube." },
      ];
  const transforms = [
    `rotateY(0deg) translateZ(${styles.width.replace("px", "") / 2}px)`,
    `rotateY(180deg) translateZ(${styles.width.replace("px", "") / 2}px)`,
    `rotateX(90deg) translateZ(${styles.width.replace("px", "") / 2}px)`,
    `rotateX(-90deg) translateZ(${styles.width.replace("px", "") / 2}px)`,
  ];

  return (
    <>
      {faces.map((face, i) => (
        <div
        key={i}
        className="absolute flex items-center justify-center text-white text-2xl font-bold overflow-hidden"
        style={{
          ...styles,
          transform: transforms[i],
          backgroundColor: !isImage ? "#f3f4f6" : "white",
        }}
      >
      
          {/* Custom content for all faces */}
          {!isImage ? (
            <div className="p-6 text-center text-black space-y-3">
              <face.icon className="w-10 h-10 mx-auto text-orange-500" />
              <h2 className="text-xl font-semibold">{face.heading}</h2>
              <p className="text-sm text-gray-700">{face.para}</p>
            </div>
          ) : (
            <div
              className="w-full h-full"
              style={{
                transform:
                  i === 1
                    ? "rotateY(180deg)"
                    : i === 2
                    ? "rotateX(-180deg)"
                    : i === 3
                    ? "rotateX(180deg)"
                    : "none",
              }}
            >
              <Image
                src={face.img}
                alt={`${face.label}${prefix}`}
                width={styles.width.replace("px", "")}
                height={styles.height.replace("px", "")}
                className="object-cover w-full h-full"
              />
            </div>
          )}
           {/* <span className={`text-black`}>{face.label + prefix}</span>
          <Image
          src={face.img}
          alt={`${face.label}${prefix}`}
          width={styles.width.replace("px", "")}
          height={styles.height.replace("px", "")}
          className="object-cover w-full h-full"
        /> */}
        </div>
      ))}
    </>
   
  );
}

