"use client";
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    title: 'Election Management',
    description:
      'Urban Chanakya delivers end-to-end election management solutions, blending grassroots insights with data-driven strategies.',
    image: '/1.png', // Replace with your image path
  },
  {
    title: 'Government Consulting',
    description:
      'Urban Chanakya partners with government bodies to design impactful communication strategies, drive citizen engagement, and promote policy awareness.',
    image: '/2.png',
  },
  {
    title: 'Corporate & Socio-Cultural Consulting',
    description:
      'Urban Chanakya bridges the gap between corporate objectives and cultural insights, offering tailored strategies that align brands with evolving societal narratives.',
    image: '/3.png',
  },
];

export default function NexaVirtuFeatures() {
  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Featured Client Project Highlights</h2>
        <p className="text-sm text-gray-300 mb-8 max-w-lg">
          Highlighting standout client projects that exemplify our expertise, creativity, and successful outcomes in diverse industries, showcasing our impactful collaborations.
        </p>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="text-white" />
            </Button>
            <Button variant="ghost" size="icon">
              <ArrowRight className="text-white" />
            </Button>
          </div>
          <Button variant="outline" className="border-white text-black bg-white hover:bg-white/90">
            View All Advantages
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center text-white"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {feature.title.split(/(?=[A-Z])/).join(' ')}
              </h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
