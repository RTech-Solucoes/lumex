"use client";

import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-[#18191c] via-[#18191c] to-[#18191c] overflow-hidden">
      {/* Animated background light spots */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary color spots */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#5b43e6]/40 rounded-full blur-3xl shadow-[0_0_100px_rgba(91,67,230,0.6)]"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#f5503d]/35 rounded-full blur-3xl shadow-[0_0_80px_rgba(245,80,61,0.5)]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.25, 0.45, 0.25],
            x: [0, 30, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-[#5b43e6]/30 rounded-full blur-3xl shadow-[0_0_90px_rgba(91,67,230,0.4)]"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -60, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
          className="absolute top-3/4 right-1/6 w-64 h-64 bg-[#f5503d]/45 rounded-full blur-3xl shadow-[0_0_70px_rgba(245,80,61,0.6)]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
            x: [0, 40, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute top-1/6 right-1/3 w-88 h-88 bg-[#5b43e6]/25 rounded-full blur-3xl shadow-[0_0_120px_rgba(91,67,230,0.3)]"
        />
        
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.15, 0.35, 0.15],
            x: [0, -30, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/4 left-1/5 w-56 h-56 bg-[#f5503d]/38 rounded-full blur-3xl shadow-[0_0_60px_rgba(245,80,61,0.5)]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.12, 0.28, 0.12],
            x: [0, 70, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 12
          }}
          className="absolute top-2/3 left-2/3 w-48 h-48 bg-[#5b43e6]/28 rounded-full blur-3xl shadow-[0_0_75px_rgba(91,67,230,0.4)]"
        />
        
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.18, 0.38, 0.18],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 14
          }}
          className="absolute bottom-1/6 right-2/5 w-40 h-40 bg-[#f5503d]/42 rounded-full blur-3xl shadow-[0_0_50px_rgba(245,80,61,0.6)]"
        />
        
        {/* Corner light spots as requested */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 20, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-[#f5503d]/50 rounded-full blur-3xl shadow-[0_0_150px_rgba(245,80,61,0.8)]"
        />
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.25, 0.5, 0.25],
            x: [0, -30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#5b43e6]/45 rounded-full blur-3xl shadow-[0_0_120px_rgba(91,67,230,0.7)]"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.45, 0.2],
            x: [0, -25, 0],
            y: [0, 25, 0],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute bottom-0 left-0 w-72 h-72 bg-[#f5503d]/40 rounded-full blur-3xl shadow-[0_0_100px_rgba(245,80,61,0.6)]"
        />
        
        {/* Additional glowing spots for more ambiance */}
        <motion.div
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.08, 0.25, 0.08],
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 16
          }}
          className="absolute top-1/8 left-1/2 w-32 h-32 bg-[#5b43e6]/20 rounded-full blur-3xl shadow-[0_0_40px_rgba(91,67,230,0.3)]"
        />
        
        <motion.div
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.12, 0.32, 0.12],
            x: [0, -90, 0],
            y: [0, 45, 0],
          }}
          transition={{
            duration: 19,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 18
          }}
          className="absolute bottom-1/8 right-1/8 w-36 h-36 bg-[#f5503d]/25 rounded-full blur-3xl shadow-[0_0_45px_rgba(245,80,61,0.4)]"
        />
      </div>
      
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}