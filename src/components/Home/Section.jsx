'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header'; // adjust the path if needed

export default function Section() {
  const videoRef = useRef(null);
  const headerRef = useRef(null); // this will scroll into Header

  useEffect(() => {
    const video = videoRef.current;
    const handleEnded = () => {
      headerRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    if (video) {
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <main>
        <Header ref={headerRef} />
      {/* Fullscreen Video */}
      <section className="h-screen w-full relative overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          playsInline
        >
          <source src="/logo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Scrolls to Header when video ends */}
    
    </main>
  );
}
