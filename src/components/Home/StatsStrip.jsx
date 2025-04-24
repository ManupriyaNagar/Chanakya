"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function StatsStrip() {
  const stats = [
    { value: 250, suffix: "+", label: "Campaigns" },
    { value: 50, suffix: "M+", label: "Client Reach in Social Media" },
    { value: 12000, suffix: "+", label: "Creative Production" },
    { value: 70, suffix: "+", label: "Twitter Trending in Top 5" },
    { value: 25, suffix: "+", label: "Events Managed" },
    { value: 20, suffix: "+", label: "VVIP Program Live" },
    { value: 350, suffix: "+", label: "Employment Generation" },
    { value: 25, suffix: " Lacs+", label: "Database Management" },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-white px-6 py-10" ref={ref}>
      {/* Horizontal line */}
      <div className="w-full h-px bg-gray-300 mb-10" />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="transition duration-300">
            <div className="text-2xl font-semibold text-black hover:text-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-400 hover:bg-clip-text transition-all duration-300">
              {inView ? <CountUp end={stat.value} duration={2} /> : "0"}
              {stat.suffix}
            </div>
            <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="w-full h-px bg-gray-300 mt-10" />
    </section>
  );
}
