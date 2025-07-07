"use client";

import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, ArrowUp } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    // { href: '#resultados', label: 'Resultados' },
    { href: '#contato', label: 'Contato' }
  ];

  const services = [
    'Neuromarketing Estratégico',
    'Gestão de Tráfego Pago',
    'SEO para Lojas Físicas',
    'Copywriting Persuasivo',
    'Automação e E-mail Marketing'
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: MessageCircle, href: '#', label: 'WhatsApp' }
  ];

  return (
    <footer className="bg-transparent pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="flex items-center">
              <Image
                src="/Logo.png"
                alt="Lúmex Marketing Agency"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            
            <p className="text-[#878899] leading-relaxed">
              Agência de neuromarketing especializada em transformar empresas através da ciência 
              do comportamento aplicada ao marketing digital.
            </p>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-[#878899] hover:text-white hover:bg-gradient-to-r hover:from-[#5b43e6] hover:to-[#f5503d] transition-all duration-100"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#878899] hover:bg-gradient-to-r hover:from-[#5b43e6] hover:to-[#f5503d] hover:bg-clip-text hover:text-transparent transition-all duration-100 inline-flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#5b43e6] group-hover:w-4 transition-all duration-100 mr-0 group-hover:mr-2"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Serviços
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[#878899] hover:bg-gradient-to-r hover:from-[#5b43e6] hover:to-[#f5503d] hover:bg-clip-text hover:text-transparent transition-all duration-100 cursor-pointer inline-flex items-center group">
                    <span className="w-0 h-0.5 bg-[#5b43e6] group-hover:w-4 transition-all duration-100 mr-0 group-hover:mr-2"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#5b43e6]" />
                <span className="text-[#878899]">+55 11 3333-3333</span>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-[#5b43e6]" />
                <span className="text-[#878899]">+55 11 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#5b43e6]" />
                <span className="text-[#878899]">contato@lumex.com.br</span>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 bg-gradient-to-r from-[#5b43e6] to-[#f5503d] text-white px-6 py-3 font-medium inline-flex items-center hover:shadow-lg hover:shadow-[#5b43e6]/25 transition-all duration-100"
            >
              Fale Conosco
              <ArrowUp className="ml-2 h-4 w-4 rotate-45" />
            </motion.button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#878899] text-sm">
              © 2024 Lúmex Marketing Agency. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-[#878899] hover:text-[#5b43e6] transition-colors"></a>
              <a href="#" className="text-[#878899] hover:bg-gradient-to-r hover:from-[#5b43e6] hover:to-[#f5503d] hover:bg-clip-text hover:text-transparent transition-all duration-100">
                Política de Privacidade
              </a>
              <a href="#" className="text-[#878899] hover:bg-gradient-to-r hover:from-[#5b43e6] hover:to-[#f5503d] hover:bg-clip-text hover:text-transparent transition-all duration-100">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-[#5b43e6] to-[#f5503d] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-100 z-40"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="h-5 w-5" />
        </motion.button>
      </div>
    </footer>
  );
}