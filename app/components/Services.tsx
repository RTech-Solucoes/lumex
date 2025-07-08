"use client";

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef} from 'react';
import {Brain, Target, Search, PenTool, Mail, ArrowRight, LucideIcon} from 'lucide-react';
import ServiceCard from '@/components/cards/ServiceCard';

interface Service {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  const services: Service[] = [
    {
      Icon: Brain,
      title: "Neuromarketing Estratégico",
      description: "Entenda o que faz seu cliente comprar usando ciência do comportamento aplicada ao marketing.",
      features: ["Análise comportamental", "Gatilhos mentais", "Jornada do cliente", "Testes A/B neurológicos"]
    },
    {
      Icon: Target,
      title: "Gestão de Tráfego Pago",
      description: "Anúncios no Google, Instagram, TikTok para impactar quem quer comprar agora.",
      features: ["Google Ads", "Facebook/Instagram Ads", "TikTok Ads", "Remarketing avançado"]
    },
    {
      Icon: Search,
      title: "SEO para Lojas Físicas",
      description: "Seja encontrado no Google por clientes da sua cidade e região.",
      features: ["SEO Local", "Google Meu Negócio", "Presença digital local", "Reviews e reputação"]
    },
    {
      Icon: PenTool,
      title: "Copywriting Persuasivo",
      description: "Textos que ativam gatilhos mentais e aumentam conversão.",
      features: ["Headlines persuasivas", "Gatilhos mentais", "Storytelling", "CTA's eficazes"]
    },
    {
      Icon: Mail,
      title: "Automação e E-mail Marketing",
      description: "Transforme leads em clientes fiéis com automações inteligentes.",
      features: ["Sequências de e-mail", "Automação de vendas", "Segmentação avançada", "Nutrição de leads"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8}}
          className="text-center mb-16"
        >
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, delay: 0.2}}
            className="inline-flex items-center px-4 py-2 bg-[#5b43e6]/10 backdrop-blur-sm rounded-full border border-[#5b43e6]/20 mb-6"
          >
            <Target className="h-5 w-5 text-[#5b43e6] mr-2"/>
            <span className="text-sm text-[#e8eafa]">Nossos Serviços</span>
          </motion.div>

          <motion.h2
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.3}}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            O que <span className="bg-gradient-to-r text-gradient">Oferecemos</span>
          </motion.h2>

          <motion.p
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.4}}
            className="text-xl text-[#aaaaaa] max-w-3xl mx-auto"
          >
            Tudo o que sua empresa precisa para se destacar no digital e vender mais:
          </motion.p>
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 3).map((service, index) =>
              <ServiceCard
                key={index}
                {...service}
                isInView={isInView}
                index={index}
              />
            )}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.slice(3, 5).map((service, index) =>
              <ServiceCard
                key={index}
                {...service}
                isInView={isInView}
                index={index}
              />
            )}
          </div>
        </div>


        {/* CTA Section */}
        <motion.div
          initial={{opacity: 0, y: 50}}
          animate={isInView ? {opacity: 1, y: 0} : {}}
          transition={{duration: 0.8, delay: 1.2}}
          className="mt-20 text-center"
        >
          <div className="card-gradient p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-xl text-[#aaaaaa] max-w-2xl mx-auto mb-8">
              Descubra como o neuromarketing pode revolucionar seus resultados.
              Agende uma conversa gratuita com nossos especialistas.
            </p>
            <button className="button-md group font-semibold inline-flex items-center justify-center ">
              Agendar Conversa Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"/>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}