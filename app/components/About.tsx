"use client";

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Brain, Users, TrendingUp, Award} from 'lucide-react';
import Image from "next/image";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const features = [
    {
      icon: Brain,
      title: "Neuromarketing",
      description: "Aplicamos ciência do comportamento para entender o que realmente motiva seus clientes."
    },
    {
      icon: Users,
      title: "Presença Digital",
      description: "Construímos uma presença digital forte que conecta sua marca com o público certo."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Online",
      description: "Estratégias comprovadas para acelerar o crescimento do seu negócio no digital."
    },
    {
      icon: Award,
      title: "Referência no Mercado",
      description: "Transformamos sua empresa em uma referência no seu segmento."
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.3}}
            className="flex justify-center items-start text-4xl md:text-5xl font-normal text-foreground mb-6"
          >
            Quem somos
            <Image
              src="/icone.png"
              alt="Lúmex Agência de Marketing"
              width={120}
              height={40}
              className="h-4 mt-1 md:mt-0 md:h-6 w-auto"
              priority
            />
          </motion.h2>

          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.4}}
            className="text-xl text-muted max-w-4xl mx-auto leading-relaxed"
          >
            Na Lúmex, somos uma agência de marketing especializada em
            <span className="text-gradient text-2xl font-bold"> neuromarketing </span>
            com um simples propósito: ajudar empresas a crescerem no digital, entendendo o
            comportamento do consumidor para criar campanhas que realmente funcionam.
            Com estratégias exclusivas, você atrai mais clientes qualificados e transforma sua marca
            em referência no mercado digital.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            return (
              <motion.div
                key={feature.title}
                initial={{opacity: 0, y: 50}}
                animate={isInView ? {opacity: 1, y: 0} : {}}
                transition={{duration: 0.8, delay: 0.6 + index * 0.1}}
                className="group"
              >
                <div className="card p-8 h-full">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 gradient rounded-full mb-6 group-hover:scale-105 group-hover:rotate-6 transition-all duration-200"
                  >
                    <feature.icon className="h-8 w-8 text-foreground"/>
                  </motion.div>

                  <h3
                    className="w-fit text-xl font-normal text-foreground mb-4 group-hover:text-gradient transition-all duration-100">
                    {feature.title}
                  </h3>

                  <p className="text-muted leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 1}}
          className="mt-20 text-center"
        >
          <div className="card-gradient p-12">
            <h3 className="text-3xl font-normal text-foreground mb-6">
              Nossa Missão
            </h3>
            <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed">
              Revolucionar o marketing digital através da neurociência, criando estratégias
              que realmente conectam marcas com pessoas, gerando resultados extraordinários
              e transformando negócios em referências de mercado.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}