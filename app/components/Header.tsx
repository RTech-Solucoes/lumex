"use client";

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";

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
            alt="Lúmex Agência de Marketing"
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
                  className="text-xl text-muted hover:text-foreground transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 gradient group-hover:w-full transition-all duration-100"></span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <Link href="#contato" className="button-sm font-medium text-sm md:text-xl">
            <span>Fale Conosco</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}