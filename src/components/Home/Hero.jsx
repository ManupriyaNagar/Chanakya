'use client';

import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-white flex flex-col md:flex-row items-center justify-between px-8 py-12">
      {/* Left Content */}
      <div className=" text-gray-900">
        <h1 className="text-4xl md:text-7xl uppercase font-semibold mb-6">
          We Create the impact
        </h1>
        <h3 className="mb-6 text-2xl ">
          We don’t just work for clients' market capture; we work to create their <br/> everlasting footprint in the domain.
        </h3>
        <div className="flex items-center space-x-4 mt-10">
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100">
            <ArrowRight className="w-4 h-4" />
          </button>
        
        </div>
      </div>
    </section>
  );
}
