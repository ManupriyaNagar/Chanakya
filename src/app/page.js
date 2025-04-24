import AnimatedSection from "@/components/Home/AnimatedSection";
import CasesSlider from "@/components/Home/CasesSlider";
import FeaturedCases from "@/components/Home/FeaturedCases";
import HeroSection from "@/components/Home/Hero";
import RotatingImageMarquee from "@/components/Home/Marqueelogos";
import NexaVirtuFeatures from "@/components/Home/NextVertuFeature";
import NexaVirtuShowcase from "@/components/Home/NextVirtuShowCase";
import StatsStrip from "@/components/Home/StatsStrip";
import TestimonialComponent from "@/components/Home/Testimonial";
import VerticalRotatingCubes from "@/components/Home/VerticalRotatingCubes"


export default function Home() {
  return (
    <div className="">
      {/* <TextMask/> */}
      {/* <Section/> */}
      <HeroSection/>
      <StatsStrip/>
      <TestimonialComponent/>
      <NexaVirtuShowcase/>
     
      <VerticalRotatingCubes/>
      <AnimatedSection/>
      <FeaturedCases/>
      <CasesSlider/>
      <NexaVirtuFeatures/>
      <RotatingImageMarquee/>
    
    </div>
  );
}
