"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {Rocket, Target, Brain, CheckCircle, BarChart3, Users, LucideIcon} from 'lucide-react';
import Image from "next/image";
import DifferentialCard from "@/components/cards/DifferentialCard";

interface Differential {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function Differentials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const differentials: Differential[] = [
    {
      Icon: Rocket,
      title: "Agência 100% focada em neuromarketing",
      description: "Somos especialistas em aplicar ciência do comportamento para resultados extraordinários."
    },
    {
      Icon: Target,
      title: "Estratégias exclusivas e personalizadas",
      description: "Cada negócio é único. Criamos estratégias sob medida para suas necessidades específicas."
    },
    {
      Icon: Brain,
      title: "Ciência aplicada para vender mais",
      description: "Usamos neurociência para entender o cliente e criar campanhas que realmente convertem."
    },
    {
      Icon: CheckCircle,
      title: "Resultados mensuráveis",
      description: "Atendimento próximo, relatórios claros e resultados que você pode medir e comprovar."
    }
  ];

  const stats = [
    { number: "200+", label: "Clientes Atendidos", icon: Users },
    { number: "85%", label: "Aumento Médio em Vendas", icon: BarChart3 },
    { number: "4 meses", label: "Tempo Médio de Resultado", icon: Target },
    { number: "98%", label: "Taxa de Satisfação", icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-transparent">
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
            <CheckCircle className="h-5 w-5 text-[#5b43e6] mr-2" />
            <span className="text-sm text-[#e8eafa]">Nossos Diferenciais</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex gap-4 justify-center items-start text-4xl md:text-5xl font-normal text-white mb-6"
          >
            Por que escolher a
            <Image
              src="/Logo.png"
              alt="Lúmex Marketing Agency"
              width={120}
              height={40}
              className="h-8 md:h-10 md:-mt-[1px] w-auto"
              priority
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#aaaaaa] max-w-3xl mx-auto"
          >
            Conheça os diferenciais que fazem da Lúmex a escolha certa para transformar seu negócio
          </motion.p>
        </motion.div>

        {/* Differentials Grid */}
        <div className="flex flex-col gap-8 mb-20">
          <div
            style={{ gridTemplateColumns: '1fr 2fr'}}
            className="flex flex-col md:grid gap-8"
          >
            {differentials.slice(0, 2).map((differential, index) =>
              <DifferentialCard
                key={index}
                {...differential}
                isInView={isInView}
                index={index}
              />
            )}
          </div>
          <div
            style={{ gridTemplateColumns: '2fr 1fr'}}
            className="flex flex-col md:grid gap-8"
          >
            {differentials.slice(2, 4).map((differential, index) =>
              <DifferentialCard
                key={index}
                {...differential}
                isInView={isInView}
                index={index}
              />
            )}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="card-gradient p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Números que Comprovam nossa Excelência
            </h3>
            <p className="text-[#aaaaaa] text-lg">
              Resultados que falam por si só
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="inline-flex items-center justify-center w-16 h-16 gradient rounded-full mb-4 mx-auto"
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>

                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>

                  <div className="text-sm text-[#aaaaaa]">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}