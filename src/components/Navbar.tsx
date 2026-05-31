import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Directors', href: '#directors' },
    { name: 'Technology', href: '#services' },
    { name: 'Social & Economic Impact', href: '#impact' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 h-24 flex items-center">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              {/* Custom Logo Based on Image */}
              <div className="relative flex items-center justify-center w-12 h-12">
                <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
                  {/* Outer Gold Star/Flower Pattern */}
                  <path d="M50 2 C60 15, 85 5, 80 25 C95 25, 95 45, 85 50 C95 55, 95 75, 80 75 C85 95, 60 85, 50 98 C40 85, 15 95, 20 75 C5 75, 5 55, 15 50 C5 45, 5 25, 20 25 C15 5, 40 15, 50 2 Z" fill="none" stroke="#D4AF37" strokeWidth="4" />
                  {/* Inner Blue Pattern */}
                  <path d="M50 10 C57 20, 75 12, 72 28 C85 28, 85 43, 77 48 C85 53, 85 68, 72 68 C75 84, 57 76, 50 86 C43 76, 25 84, 28 68 C15 68, 15 53, 23 48 C15 43, 15 28, 28 28 C25 12, 43 20, 50 10 Z" fill="none" stroke="#0044CC" strokeWidth="3" />
                  {/* Internal complex icon abstraction */}
                  <path d="M45 25 C45 25, 30 65, 40 75 C50 85, 65 65, 55 45" fill="none" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
                  <circle cx="50" cy="70" r="3" fill="#1f2937" />
                  <path d="M40 40 L45 35" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                  <path d="M55 35 L60 45" fill="none" stroke="#1f2937" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-[18px] lg:text-[22px] tracking-[0.02em] text-[#0044CC] pb-0.5 leading-none drop-shadow-sm font-serif">RABB HU AAHAD</span>
                <span className="text-[9px] lg:text-[11px] tracking-[0.05em] text-[#D4AF37] mt-0.5 uppercase leading-none font-semibold">New Energy Industries LLP</span>
              </div>
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1A1A1A] hover:text-[#0A84D6] px-2 py-2 text-[15px] font-medium transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#0A84D6]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 overflow-hidden shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-gray-900 hover:bg-gray-50 hover:text-[#0A84D6] rounded-md"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
