"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const casesData = [
  {
  
    title: "Branding Strategy & Advertising Services",
    description: "Crafting identities, campaigns, advertisements to elevate brands, captivate audiences, and drive growth effectively.",
    image: "/E1.png",
    titleb: "Branding Strategy & Advertising Services",
  },
  {
   
    title: "Election Management",
    description:
      "Providing comprehensive services for strategizing, organizing, and managing successful electoral campaigns efficiently.",
      image: "/E3.png",
    titleb: "Election Management",
  },
  {
    
    title: "Social Media & Influencer Marketing",
    description: "Leveraging social platforms and influencer partnerships to amplify brand reach and engagement strategically.",
    image: "/E4.png",
    titleb: "Social Media & Influencer Marketing",
  },
  {
  
    title: "Content Creation, Design & Videography",
    description: "Creating captivating content, innovative designs, and engaging videos to elevate brand presence effectively.",
    image: "/E2.png",
    titleb: "Content Creation, Design & Videography",
  },
  {
    
    title: "Leadership Branding",
    description: "Building influential personal brands that resonate with audiences, driving leadership and career success effectively.",
    image: "/E5.png",
    titleb: "Leadership Branding",
  },
  {
    
    title: "Public Relations Management",
    description: "Strategically shaping narratives, fostering relationships, and managing reputations for effective public perception management.",
    image: "/E6.png",
    titleb: "Leadership Branding",
  },
];

export default function CasesSlider() {
  return (
    <div className="overflow-x-auto w-full px-10 py-10">
      <div className="flex space-x-6 min-w-fit">
        {casesData.map((item, i) => (
          <div
            key={i}
            className={`group relative bg-gray-100 rounded-2xl transition-all duration-300 ease-in-out min-w-[200px] hover:min-w-[360px] max-w-[360px] h-[400px] p-4 flex flex-col justify-between shadow-sm`}
          >
            {/* Top Right Icon */}
            <div className="absolute top-4 right-4 bg-gray-200 rounded-full p-1 z-10">
              <ArrowUpRight className="w-4 h-4 text-gray-500" />
            </div>

            {/* Year */}
            <div className="text-sm text-gray-400">{item.year}</div>

            {/* Scrolling Title */}
            <div className="relative overflow-hidden h-[48px] mt-2">
              <div className="absolute whitespace-nowrap text-[2rem] font-bold transition-all duration-200 group-hover:!animate-none animate-marquee">
                {item.title}
              </div>
            </div>

            {/* Bottom Title */}
            <div className="text-sm text-gray-900 mt-2">{item.titleb}</div>

            {/* Image (only on hover) */}
            <div className="hidden group-hover:block mt-4 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={200}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Description (only on hover) */}
            <p className="hidden group-hover:block text-sm text-gray-700 mt-4">
              {item.description}
            </p>

            {/* Button (only on hover) */}
            <button className="hidden group-hover:inline-block mt-4 text-sm text-gray-800 hover:underline font-medium">
              Explore More
            </button>
          </div>
        ))}
      </div>

      {/* Marquee animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 10s linear infinite;
        }

        .group-hover\\:!animate-none:hover {
          animation: none !important;
        }
      `}</style>
    </div>
  );
}
