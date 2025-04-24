"use client"
import React, { useEffect,useState, useRef } from "react";
import { gsap } from 'gsap';

const AboutTop = () => {
    const phrases = [" Politics.", " Governance.", " Corporate Sectors."];
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const h1Ref = useRef(null);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }, 700);
  
      return () => clearInterval(interval);
    }, [phrases.length]);
  
    useEffect(() => {
      if (!h1Ref.current) return;
  
      const letters = h1Ref.current.querySelectorAll('.letter');
      gsap.set(letters, { opacity: 1 });
  
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 5,
      });
  
      tl.to(letters, {
        duration: 0.05,
        opacity: 0,
        stagger: {
          each: 0.05,
          from: 'end',
          ease: 'none',
        },
      });
  
      tl.to(letters, {
        duration: 0.05,
        opacity: 1,
        stagger: {
          each: 0.05,
          from: 'start',
          ease: 'none',
        },
      }, ">");
  
      return () => {
        tl.kill();
      };
    }, []);

 
  const splitText = (text) => {
    return text.split('').map((char, index) => {
      if (char === ' ') {
        return (
          <span key={index} className="letter text-black">
            &nbsp;
          </span>
        );
      }
      return (
        <span key={index} className="letter text-black">
          {char}
        </span>
      );
    });
  };


  return (
    <section
      className="w-full bg-cover bg-center    "
      style={{ backgroundImage: "url('/post.png')" }}
    >
        

      <div className=" text-black text-9xl "> </div>
      <div className="flex flex-col lg:flex-row h-full w-full">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-16">
          <img
            src="/logo1.png"
            alt="Hero"
            className="max-h-[350px] max-w-[7xl] object-contain mt-72 mr-36 "
          />
        </div>
        {/* Text Container */}
        <div className="flex flex-col justify-center w-full lg:w-1/2 p-4 md:p-16 mr-10 ">
          <h1 className="text-5xl font-bold">Creating an Impact in
            <span className="text-orange-500">{phrases[currentPhraseIndex]}</span>

            
          </h1>
        
          <p className="text-xl"
          
          >
            Urban Chanakya has emerged as a powerhouse specializing in brand strategy, creativity, election management, and technology solutions, featuring a highly skilled and talented team of designers, strategists, and creative and content experts.
          </p>
        </div>
       
      </div>
    </section>
  );
};

export default AboutTop;
