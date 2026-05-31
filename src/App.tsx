import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Directors } from './components/Directors';
import { Technology } from './components/Services';
import { Impact } from './components/Impact';
import { FooterContact } from './components/FooterContact';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="font-sans text-gray-900 overflow-x-hidden antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Directors />
        <Technology />
        <Impact />
        <FooterContact />
      </main>
      <WhatsAppButton />
    </div>
  );
}
