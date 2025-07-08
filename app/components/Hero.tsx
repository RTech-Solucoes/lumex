"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Brain, TrendingUp, Target } from 'lucide-react';
import Image from "next/image";
import CountUp from "@/components/reactbits/TextAnimations/CountUp/CountUp";

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
              className="text-xl text-[#aaaaaa] mb-8 max-w-2xl mx-auto lg:mx-0"
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
              <button className="button-md group font-semibold inline-flex items-center justify-center"
              >
                Quero Crescer no Digital
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#sobre"
                className="bg-transparent text-white px-8 py-4 font-semibold hover:backdrop-blur-3xl hover:bg-white/5"
              >
                Conheça nosso trabalho
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  +
                  <CountUp
                    from={0}
                    to={200}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                </div>
                <div className="text-sm text-[#aaaaaa]">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  +
                  <CountUp
                    from={0}
                    to={40}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <div className="text-sm text-[#aaaaaa]">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  <CountUp
                    from={0}
                    to={98}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />
                  %
                </div>
                <div className="text-sm text-[#aaaaaa]">Satisfação</div>
              </div>
            </motion.div>
          </motion.div>
          <Image
            src="/lamp.png"
            alt="Ilustração de uma Lâmpada"
            width={1067}
            height={911}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}