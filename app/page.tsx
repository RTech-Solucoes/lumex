"use client";

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Differentials from './components/Differentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div id="page" className="relative bg-[#18191c] overflow-x-hidden overflow-y-auto custom-scrollbar max-h-screen">
      <div className="fixed inset-0 pointer-events-none">
        <div id="3" className="absolute top-3/4 right-1/6 w-64 h-64 bg-[#5b43e6]/10 rounded-full blur-3xl shadow-[0_0_70px_rgba(91,67,230,0.3)]"/>
        <div id="7" className="absolute bottom-0 right-0 w-72 h-72 bg-[#f5503d]/10 rounded-full blur-3xl shadow-[0_0_100px_rgba(245,80,61,0.6)]"/>
        <div id="8" className="absolute top-1/8 left-1/2 w-32 h-32 bg-[#5b43e6]/30 rounded-full blur-3xl shadow-[0_0_40px_rgba(91,67,230,0.3)]"/>
      </div>

      <Header/>
      <Hero/>
      <About/>
      <Services/>
      {/*<Testimonials/>*/}
      <Differentials/>
      <Contact/>
      <Footer/>
    </div>
  );
}