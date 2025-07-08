"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    // { href: '#resultados', label: 'Resultados' },
    { href: '#contato', label: 'Contato' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      style={{maxWidth: "calc(100vw - 32px)"}}
      className="mx-auto z-50 transition-all duration-100"
    >
      <div className="max-w-7xl mx-auto transition-all duration-100 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between transition-all duration-100 h-16">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Lúmex Marketing Agency"
            width={120}
            height={40}
            className="h-10 w-auto"
            priority
          />

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-xl text-[#aaaaaa] hover:text-white transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient group-hover:w-full transition-all duration-100"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className="button-sm hidden lg:block font-medium">
            Fale Conosco
          </button>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="button-transparent lg:hidden text-[#aaaaaa] hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden backdrop-blur-3xl border-t border-white/10"
            >
              <div className="pt-3 space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-[#aaaaaa] hover:text-white block py-2 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  className="button-sm w-full mt-4 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Fale Conosco
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}