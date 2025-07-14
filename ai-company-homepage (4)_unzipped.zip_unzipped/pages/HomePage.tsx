
import React from 'react';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { CallToAction } from '../components/CallToAction';
import {
  chatGptCards,
  researchCards,
  businessCards,
  developerCards,
  storiesCards,
  newsCards,
} from '../constants/data';
import { CardData } from '../types';

const HorizontalSection: React.FC<{ title: string; cards: CardData[] }> = ({ title, cards }) => (
    <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">{title}</h2>
        <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-6 -mb-6">
                {cards.map((card, index) => (
                    <Card key={index} {...card} layout="horizontal" />
                ))}
                <div className="flex-shrink-0 w-1"></div>
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#111] to-transparent pointer-events-none"></div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
  return (
    <main className="px-4 md:px-8 lg:px-12 xl:px-24">
      <Hero />
      <HorizontalSection title="ChatGPT" cards={chatGptCards} />
      <HorizontalSection title="Research" cards={researchCards} />
      <HorizontalSection title="For Business" cards={businessCards} />
      <HorizontalSection title="For Developers" cards={developerCards} />
      <HorizontalSection title="Stories" cards={storiesCards} />
      <HorizontalSection title="News" cards={newsCards} />
      <CallToAction />
    </main>
  );
};

export default HomePage;