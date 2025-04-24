import CasesSlider from "@/components/Home/CasesSlider";
import FeaturedCases from "@/components/Home/FeaturedCases";
import HeroSection from "@/components/Home/Hero";
import NexaVirtuFeatures from "@/components/Home/NextVertuFeature";
import NexaVirtuShowcase from "@/components/Home/NextVirtuShowCase";
import RotatingCube from "@/components/Home/RotatingCube";
import Section from "@/components/Home/Section";
import StatsStrip from "@/components/Home/StatsStrip";
import TestimonialComponent from "@/components/Home/Testimonial";
import TextMask from "@/components/TextMask/TextMask";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <TextMask/> */}
      {/* <Section/> */}
      <HeroSection/>
      <StatsStrip/>
      <TestimonialComponent/>
      <NexaVirtuShowcase/>
      <RotatingCube/>
      <FeaturedCases/>
      <CasesSlider/>
      <NexaVirtuFeatures/>
    </div>
  );
}
