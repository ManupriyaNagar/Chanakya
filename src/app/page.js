import HeroSection from "@/components/Home/Hero";
import NexaVirtuShowcase from "@/components/Home/NextVirtuShowCase";
import RotatingCube from "@/components/Home/RotatingCube";
import StatsStrip from "@/components/Home/StatsStrip";
import TestimonialComponent from "@/components/Home/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <HeroSection/>
      <StatsStrip/>
      <TestimonialComponent/>
      <NexaVirtuShowcase/>
      <RotatingCube/>
    </div>
  );
}
