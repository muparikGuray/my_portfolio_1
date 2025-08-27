import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Globe, Wifi, Video, ArrowRight } from 'lucide-react';
import { Service } from '../types';

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: 'Cpu',
      title: 'AI SaaS Development',
      description: 'Custom AI-powered SaaS applications with multilingual support, designed specifically for businesses in emerging markets and educational institutions.',
      features: [
        'Multilingual AI integration (Somali/English)',
        'Custom business logic development',
        'Scalable SaaS architecture',
        'Real-time data processing',
        'Mobile-responsive interfaces'
      ]
    },
    {
      icon: 'Globe',
      title: 'Modern Web Solutions',
      description: 'Full-stack web applications using React, Next.js, and Python. Specializing in educational platforms, business management systems, and e-commerce solutions.',
      features: [
        'React & Next.js development',
        'Python backend systems',
        'PostgreSQL database design',
        'Tailwind CSS styling',
        'Performance optimization'
      ]
    },
    {
      icon: 'Video',
      title: 'Educational Technology',
      description: 'Comprehensive educational platforms combining learning management systems with AI-powered features for universities and training institutions.',
      features: [
        'University management systems',
        'AI-powered attendance tracking',
        'Student progress analytics',
        'Course content management',
        'Multi-language support'
      ]
    },
    {
      icon: 'Wifi',
      title: 'Videography & Media',
      description: 'Professional videography services combined with technical expertise to create compelling educational and promotional content for tech companies.',
      features: [
        'Educational content creation',
        'Product demonstrations',
        'Tech tutorial videos',
        'Post-production editing',
        'Social media content'
      ]
    }
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return Cpu;
      case 'Globe': return Globe;
      case 'Wifi': return Wifi;
      case 'Video': return Video;
      default: return Cpu;
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = getIcon(service.icon);
            return (
              <motion.div
                key={service.title}
                className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className="group/btn flex items-center text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                  className="group/btn flex items-center text-primary-700 dark:text-primary-400 font-semibold hover:text-primary-800 dark:hover:text-primary-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-600/50 rounded"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </motion.button>

                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/10 to-purple-600/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-500/5 to-blue-600/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-lg">
              Let's discuss how I can help bring your ideas to life with cutting-edge technology and innovative solutions.
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-primary-700 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105 shadow-lg focus:ring-4 focus:ring-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;