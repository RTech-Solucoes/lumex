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
    <div id="page" className="relative bg-background overflow-x-hidden overflow-y-auto custom-scrollbar max-h-screen">
      <div className="flex fixed inset-0 pointer-events-none">
        <div id="1" className="absolute -top-20 -left-28 w-96 h-96 bg-primary/25 rounded-full blur-3xl shadow-[0_0_100px_rgba(91,67,230,0.3)]"/>
        <div id="2" className="absolute -bottom-20 -right-28 w-96 h-96 bg-secondary/10 rounded-full blur-3xl shadow-[0_0_100px_rgba(245,80,61,0.6)]"/>
      </div>
      <div>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        {/*<Testimonials/>*/}
        <Differentials/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}