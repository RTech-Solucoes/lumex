"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Brain, TrendingUp, Target } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-[#5b43e6]/10 backdrop-blur-sm rounded-full border border-[#5b43e6]/20 mb-6"
            >
              <Brain className="h-5 w-5 text-[#5b43e6] mr-2" />
              <span className="text-sm text-[#e8eafa]">Agência de Neuromarketing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Aumente suas
              <br/>
              <span className="text-gradient">
                Vendas Online
              </span>
              {' '}e
              <br/>
              <span className="text-gradient">
                Presença Digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-[#878899] mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para 
              atrair mais clientes e vender mais todos os dias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-md group font-semibold inline-flex items-center justify-center"
              >
                Quero Crescer no Digital
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <button
                className="bg-transparent text-white px-8 py-4 font-semibold hover:backdrop-blur-3xl hover:bg-white/5"
              >
                Ver Cases de Sucesso
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">+200</div>
                <div className="text-sm text-[#878899]">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">+40%</div>
                <div className="text-sm text-[#878899]">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-sm text-[#878899]">Satisfação</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Glassmorphism card */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="card rounded-3xl p-8 border border-white/10 shadow-2xl"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#f5503d] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#5b43e6] rounded-full"></div>
                    <div className="w-3 h-3 bg-[#e8eafa] rounded-full"></div>
                  </div>
                  <TrendingUp className="h-6 w-6 text-[#5b43e6]" />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8eafa]">Vendas Online</span>
                    <span className="text-[#5b43e6] font-bold">+85%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-2 gradient rounded-full"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[#e8eafa]">Tráfego Qualificado</span>
                    <span className="text-[#f5503d] font-bold">+120%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '90%' }}
                      transition={{ duration: 2, delay: 1.5 }}
                      className="h-2 bg-gradient-to-r from-[#f5503d] to-[#5b43e6] rounded-full"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-[#e8eafa]">ROI</span>
                    <span className="text-[#5b43e6] font-bold">+300%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '95%' }}
                      transition={{ duration: 2, delay: 2 }}
                      className="h-2 gradient rounded-full"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 gradient p-4 rounded-2xl"
              >
                <Target className="h-8 w-8 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
