"use client";

import {motion} from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div id="page" className="relative bg-[#18191c] overflow-x-hidden overflow-y-auto scrollbar-hide max-h-screen">
      <div className="fixed inset-0 pointer-events-none">
        {/*<div id="1" className="absolute top-1/4 left-1/6 w-96 h-96 bg-[#5b43e6]/40 rounded-full blur-3xl shadow-[0_0_100px_rgba(91,67,230,0.6)]"/>*/}
        <div id="2" className="absolute top-1/2 right-1/4 w-80 h-80 bg-[#f5503d]/35 rounded-full blur-3xl shadow-[0_0_80px_rgba(245,80,61,0.5)]"/>
        <div id="3" className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-[#5b43e6]/30 rounded-full blur-3xl shadow-[0_0_90px_rgba(91,67,230,0.4)]"/>
        <div id="4" className="absolute top-3/4 right-1/6 w-64 h-64 bg-[#f5503d]/45 rounded-full blur-3xl shadow-[0_0_70px_rgba(245,80,61,0.6)]"/>
        <div id="5" className="absolute top-1/6 right-1/3 w-88 h-88 bg-[#5b43e6]/25 rounded-full blur-3xl shadow-[0_0_120px_rgba(91,67,230,0.3)]"/>
        <div id="6" className="absolute bottom-1/4 left-1/5 w-56 h-56 bg-[#f5503d]/38 rounded-full blur-3xl shadow-[0_0_60px_rgba(245,80,61,0.5)]"/>
        <div id="7" className="absolute top-2/3 left-2/3 w-48 h-48 bg-[#5b43e6]/28 rounded-full blur-3xl shadow-[0_0_75px_rgba(91,67,230,0.4)]"/>
        {/*<div id="8" className="absolute top-0 left-0 w-96 h-96 bg-[#5b43e6]/50 rounded-full blur-3xl shadow-[0_0_150px_rgba(91,67,230,0.4)]"/>*/}
        <div id="9" className="absolute bottom-0 right-0 w-80 h-80 bg-[#5b43e6]/45 rounded-full blur-3xl shadow-[0_0_120px_rgba(91,67,230,0.7)]"/>
        <div id="10" className="absolute bottom-0 right-0 w-72 h-72 bg-[#f5503d]/40 rounded-full blur-3xl shadow-[0_0_100px_rgba(245,80,61,0.6)]"/>
        <div id="11" className="absolute top-1/8 left-1/2 w-32 h-32 bg-[#5b43e6]/20 rounded-full blur-3xl shadow-[0_0_40px_rgba(91,67,230,0.3)]"/>
        {/*<div id="12" className="absolute bottom-1/8 right-1/8 w-36 h-36 bg-[#f5503d]/25 rounded-full blur-3xl shadow-[0_0_45px_rgba(245,80,61,0.4)]"/>*/}
      </div>

      <Header/>
      <main>
        <Hero/>
        <About/>
        <Services/>
        <Testimonials/>
        <Differentials/>
        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}