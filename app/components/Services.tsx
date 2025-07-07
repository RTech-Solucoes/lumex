"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Target, Search, PenTool, Mail, ArrowRight } from 'lucide-react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const services = [
    {
      icon: Brain,
      title: "Neuromarketing Estratégico",
      description: "Entenda o que faz seu cliente comprar usando ciência do comportamento aplicada ao marketing.",
      features: ["Análise comportamental", "Gatilhos mentais", "Jornada do cliente", "Testes A/B neurológicos"]
    },
    {
      icon: Target,
      title: "Gestão de Tráfego Pago",
      description: "Anúncios no Google, Instagram, TikTok para impactar quem quer comprar agora.",
      features: ["Google Ads", "Facebook/Instagram Ads", "TikTok Ads", "Remarketing avançado"]
    },
    {
      icon: Search,
      title: "SEO para Lojas Físicas",
      description: "Seja encontrado no Google por clientes da sua cidade e região.",
      features: ["SEO Local", "Google Meu Negócio", "Presença digital local", "Reviews e reputação"]
    },
    {
      icon: PenTool,
      title: "Copywriting Persuasivo",
      description: "Textos que ativam gatilhos mentais e aumentam conversão.",
      features: ["Headlines persuasivas", "Gatilhos mentais", "Storytelling", "CTA's eficazes"]
    },
    {
      icon: Mail,
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
            <Target className="h-5 w-5 text-[#5b43e6] mr-2" />
            <span className="text-sm text-[#e8eafa]">Nossos Serviços</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            O que <span className="bg-gradient-to-r from-[#5b43e6] to-[#f5503d] bg-clip-text text-transparent">Oferecemos</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-[#878899] max-w-3xl mx-auto"
          >
            Tudo o que sua empresa precisa para se destacar no digital e vender mais:
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                className="group h-full"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 hover:border-[#5b43e6]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#5b43e6]/10 h-full flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#5b43e6] to-[#f5503d] rounded-full mb-6"
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-[#5b43e6] group-hover:to-[#f5503d] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-[#878899] leading-relaxed mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 + featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-[#5b43e6] to-[#f5503d] rounded-full"></div>
                        <span className="text-sm text-[#e8eafa]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn mt-6 w-full bg-gradient-to-r from-[#5b43e6] to-[#f5503d] text-white px-6 py-3 rounded-full font-medium hover:shadow-lg hover:shadow-[#5b43e6]/25 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#5b43e6]/10 to-[#f5503d]/10 backdrop-blur-xl rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">
              Pronto para Transformar seu Negócio?
            </h3>
            <p className="text-xl text-[#878899] max-w-2xl mx-auto mb-8">
              Descubra como o neuromarketing pode revolucionar seus resultados. 
              Agende uma conversa gratuita com nossos especialistas.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-[#5b43e6] to-[#f5503d] text-white px-8 py-4 rounded-full font-semibold inline-flex items-center justify-center hover:shadow-lg hover:shadow-[#5b43e6]/25 transition-all duration-300"
            >
              Agendar Conversa Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}