import { useState } from 'react';

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [showTriangles, setShowTriangles] = useState(false);

  // Trigger the animation to show the image and triangles
  const handleClick = () => {
    setShowImage(true);
    setTimeout(() => setShowTriangles(true), 2000); // Delay triangles' appearance
  };

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center">
      {/* Words at the top */}
      <div className="absolute top-20 left-0 right-0 flex justify-between text-white text-4xl px-10">
        <span className="left-word">Left</span>
        <span className="right-word">Right</span>
      </div>

      {/* Box for Image and Triangles */}
      <div className={`relative w-48 h-48 mt-16 transition-all duration-1000 ${showImage ? 'w-full h-full' : 'w-0 h-0'}`}>
        <div className={`absolute inset-0 bg-white ${showImage ? 'block' : 'hidden'}`}>
          <img
            src="/your-image.jpg" // Replace with your image path
            alt="Background"
            className={`object-cover w-full h-full transition-all duration-1000 ${showImage ? 'opacity-100' : 'opacity-0'}`}
          />
          {showTriangles && (
            <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
              <div className={`triangle-left transition-all duration-1000 ${showTriangles ? 'transform translate-x-0' : 'transform -translate-x-12'}`}></div>
              <div className={`triangle-right transition-all duration-1000 ${showTriangles ? 'transform translate-x-0' : 'transform translate-x-12'}`}></div>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Button */}
      <button
        onClick={handleClick}
        className="absolute bottom-10 text-white bg-transparent border-none text-2xl cursor-pointer"
      >
        Scroll Down
      </button>

      {/* Scroll down functionality */}
      <style jsx>{`
        .triangle-left, .triangle-right {
          width: 0;
          height: 0;
          border-left: 50px solid transparent;
          border-right: 50px solid transparent;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
        }

        .triangle-left {
          border-bottom: 50px solid white;
          left: 0;
        }

        .triangle-right {
          border-bottom: 50px solid white;
          right: 0;
        }
      `}</style>
    </div>
  );
}
