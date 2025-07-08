"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Brain } from 'lucide-react';
import Image from "next/image";
import CountUp from "@/components/reactbits/TextAnimations/CountUp/CountUp";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{ maxHeight: "calc(100vh - 96px)" }}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-transparent"
    >
      <div className="flex min-h-full w-full max-w-7xl justify-center md:justify-start overflow-auto relative mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src="/lamp.png"
          alt="Ilustração de uma Lâmpada"
          width={1067}
          height={911}
          className="absolute opacity-50 md:opacity-100 top-0 md:-top-20 -right-14 md:-right-24 w-4/5 h-auto z-10"
          priority
        />
        <div className="relative grid gap-12 items-center z-50">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-normal text-foreground mb-6 drop-shadow-2xl shadow-background"
            >
              Aumente suas
              <br/>
              <span className="text-gradient font-semibold italic">
                Vendas Online &
              </span>
              <br/>
              <span className="text-gradient font-semibold italic">
                Presença Digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted mb-8 max-w-2xl mx-auto md:mx-0"
            >
              Na Lúmex, combinamos neurociência, marketing e estratégias personalizadas para
              atrair mais clientes e vender mais todos os dias.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start text-xl"
            >
              <button className="button-md group font-semibold inline-flex items-center justify-center"
              >
                Quero Crescer no Digital
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
              </button>

              <a
                href="#sobre"
                className="bg-transparent text-foreground px-8 py-4 font-semibold hover:backdrop-blur-3xl hover:bg-foreground/5"
              >
                Conheça nosso trabalho
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-foreground/10"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
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
                <div className="text-sm text-muted">Clientes Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
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
                <div className="text-sm text-muted">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
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
                <div className="text-sm text-muted">Satisfação</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}