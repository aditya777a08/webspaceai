
import React from 'react';
import { ArrowRightIcon } from './icons';

export const CallToAction: React.FC = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <h2 className="text-4xl md:text-5xl font-bold max-w-3xl mx-auto mb-8 leading-tight">
        Instant answers. Greater productivity. Endless inspiration.
      </h2>
      <button className="bg-white text-black font-semibold py-3 px-6 rounded-full flex items-center space-x-2 mx-auto hover:bg-gray-200 transition-colors">
        <span>Try ChatGPT</span>
        <ArrowRightIcon />
      </button>
    </section>
  );
};