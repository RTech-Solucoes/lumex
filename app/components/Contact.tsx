"use client";

import {motion} from 'framer-motion';
import {useInView} from 'framer-motion';
import {useRef, useState} from 'react';
import {MessageCircle, Mail, Phone, MapPin, ArrowRight, CheckCircle} from 'lucide-react';
import {ContactForm} from '../types';
import Image from 'next/image';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({name: '', email: '', phone: '', message: ''});
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Fale diretamente com nossa equipe",
      value: "+55 11 99999-9999",
    },
    {
      icon: Mail,
      title: "E-mail",
      description: "Para dúvidas e informações",
      value: "contato@lumex.com.br",
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "Atendimento comercial",
      value: "+55 11 3333-3333",
    },
    {
      icon: MapPin,
      title: "Localização",
      description: "Atendimento presencial e online",
      value: "Uberlândia - MG, Brasil",
    },
  ];

  return (
    <section id="contato" className="py-20 bg-transparent">
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
            <MessageCircle className="h-5 w-5 text-[#5b43e6] mr-2"/>
            <span className="text-sm text-white">Fale Conosco</span>
          </motion.div>

          <motion.h2
            initial={{opacity: 0, y: 30}}
            animate={isInView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.8, delay: 0.3}}
            className="flex justify-center items-start text-4xl md:text-5xl font-normal text-white mb-6"
          >
            Pronto para começar ?
            <Image
              src="/icone.png"
              alt="Lúmex Marketing Agency"
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
            className="text-xl text-[#aaaaaa] max-w-3xl mx-auto"
          >
            Pronto para sair do comum e levar sua loja física para o digital com estratégias de neuromarketing?
            Fale agora com nossos especialistas e veja como podemos ajudar você a aumentar suas vendas online e offline.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{opacity: 0, x: -50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.5}}
          >
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Solicitar Estratégia Personalizada
              </h3>

              {submitted ? (
                <motion.div
                  initial={{opacity: 0, scale: 0.8}}
                  animate={{opacity: 1, scale: 1}}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4"/>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    Mensagem Enviada!
                  </h4>
                  <p className="text-[#aaaaaa]">
                    Entraremos em contato em breve para discutir sua estratégia personalizada.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#5b43e6] focus:border-transparent transition-all duration-100"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#5b43e6] focus:border-transparent transition-all duration-100"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#5b43e6] focus:border-transparent transition-all duration-100"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-[#aaaaaa] focus:outline-none focus:ring-2 focus:ring-[#5b43e6] focus:border-transparent transition-all duration-100 resize-none"
                      placeholder="Conte-nos mais sobre seu negócio e objetivos..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="button-md w-full font-semibold inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"/>
                    ) : (
                      <>
                        Enviar Mensagem
                        <ArrowRight className="ml-2 h-5 w-5"/>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{opacity: 0, x: 50}}
            animate={isInView ? {opacity: 1, x: 0} : {}}
            transition={{duration: 0.8, delay: 0.6}}
            className="flex flex-col justify-between gap-12"
          >
            {contactInfo.map((info, index) => {
              return (
                <motion.div
                  key={info.title}
                  initial={{opacity: 0, y: 30}}
                  animate={isInView ? {opacity: 1, y: 0} : {}}
                  transition={{duration: 0.8, delay: 0.7 + index * 0.1}}
                  className="group"
                >
                  <div className="card p-6 ">
                    <div className="flex items-start space-x-4">
                      <motion.div
                        whileHover={{scale: 1.1, rotate: 5}}
                        className="flex-shrink-0 w-12 h-12 gradient rounded-full flex items-center justify-center"
                      >
                        <info.icon className="h-6 w-6 text-white"/>
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-white mb-1 transition-all duration-100">
                          {info.title}
                        </h4>
                        <p className="text-[#aaaaaa] text-sm mb-2">
                          {info.description}
                        </p>
                        <p className="text-white font-medium">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Location */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}