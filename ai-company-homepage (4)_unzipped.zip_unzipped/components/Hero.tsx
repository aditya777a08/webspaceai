
import React, { useState, useEffect } from 'react';
import { heroSlides } from '../constants/data';
import { ArrowRightIcon } from './icons';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] my-4 rounded-2xl overflow-hidden group">
      <div className="w-full h-full overflow-hidden">
        <div
            style={{ backgroundImage: `url(${slide.imageUrl})` }}
            className="w-full h-full bg-cover bg-center animate-ken-burns"
        ></div>
      </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>


      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8">{slide.description}</p>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full flex items-center space-x-2 hover:bg-gray-200 transition-colors transform hover:scale-105">
          <span>{slide.buttonText}</span>
          <ArrowRightIcon />
        </button>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};