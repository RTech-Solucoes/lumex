"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Testimonial } from '../types';

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Carla Santos',
      role: 'Proprietária',
      business: 'Loja de Decoração',
      content: 'Tivemos 40% de crescimento em 4 meses usando as estratégias de neuromarketing da Lúmex. O retorno foi impressionante!',
      result: '+40% de crescimento'
    },
    {
      id: '2',
      name: 'João Silva',
      role: 'Empresário',
      business: 'Segmento de Moda',
      content: 'Mais clientes entrando na loja física e comprando online. Vale cada centavo! A presença digital melhorou drasticamente.',
      result: '+65% em vendas online'
    },
    {
      id: '3',
      name: 'Maria Oliveira',
      role: 'Diretora Comercial',
      business: 'Rede de Restaurantes',
      content: 'As estratégias de neuromarketing da Lúmex revolucionaram nossa comunicação. Conseguimos entender melhor nossos clientes.',
      result: '+80% no engajamento'
    },
    {
      id: '4',
      name: 'Pedro Costa',
      role: 'CEO',
      business: 'E-commerce',
      content: 'ROI excepcional! A equipe da Lúmex entende profundamente o comportamento do consumidor digital.',
      result: '+150% no ROI'
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="resultados" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-[#5b43e6]/10 backdrop-blur-sm rounded-full border border-[#5b43e6]/20 mb-6"
          >
            <Star className="h-5 w-5 text-[#5b43e6] mr-2" />
            <span className="text-sm text-white">Resultados Reais</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Empresas que <span className="text-gradient">Confiam</span> na Lúmex
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#aaaaaa] max-w-3xl mx-auto"
          >
            Já aumentaram suas vendas e se tornaram referência no digital:
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="card p-8 md:p-12 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#5b43e6]/10 to-[#f5503d]/10 rounded-full blur-3xl"></div>

            <Quote className="absolute top-6 left-6 h-12 w-12 text-[#5b43e6]/30" />

            <div className="relative z-10">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-[#f5503d] fill-current" />
                  ))}
                </div>

                <blockquote className="text-2xl md:text-3xl text-white leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                  <div className="text-center md:text-left">
                    <div className="text-lg font-semibold text-white">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-[#aaaaaa]">
                      {testimonials[currentIndex].role}, {testimonials[currentIndex].business}
                    </div>
                  </div>

                  <div className="px-6 py-3 rounded-full font-bold text-lg">
                    {testimonials[currentIndex].result}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-100 border border-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-100 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-[#5b43e6] to-[#f5503d]'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-100 border border-white/20"
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        </div>

        {/* Highlight Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="card-gradient p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Neuromarketing que gera resultados reais
            </h3>
            <p className="text-[#aaaaaa] text-lg">
              Empresas que aplicam nossas estratégias de neuromarketing veem resultados
              consistentes e duradouros em seus negócios.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}