import React from 'react';
import { Hero } from '../components/Hero';
import { Encubidia } from '../components/Encubidia';
import { Signatures } from '../components/Signatures';
import { About, WhyAmary, Reviews, Heritage, ContactPanel } from '../components/StorySections';

export const Home: React.FC = () => {
  return (
    <main className="w-full bg-stone-50">
      <Hero />
      <Encubidia />
      <Signatures />
      <WhyAmary />
      <Reviews />
      <Heritage />
      <About />
      <ContactPanel />
    </main>
  );
};