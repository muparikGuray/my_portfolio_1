import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Users, MapPin, Calendar, Award } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'AI-Powered Applications',
      description: 'Building intelligent systems with multilingual support'
    },
    {
      icon: Brain,
      title: 'SaaS Development',
      description: 'Creating scalable software solutions for businesses'
    },
    {
      icon: Zap,
      title: 'Modern Web Solutions',
      description: 'Full-stack development with React, Next.js, and Python'
    },
    {
      icon: Users,
      title: 'Tech Entrepreneurship',
      description: 'Building a tech company with multiple innovative products'
    }
  ];

  const skills = [
    'Python', 'JavaScript', 'PHP', 'React', 'Next.js', 'Tailwind CSS',
    'PostgreSQL', 'AI APIs', 'SaaS Development', 'Videography', 'Multilingual AI', 'Desktop Applications'
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Software Engineer Student & AI SaaS Builder from Hargeisa, Somaliland
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl border-4 border-primary-200 dark:border-primary-800">
                <img
                  src="/aniga.jpg"
                  alt="Mubarik Guray"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600/20 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-primary-200 dark:border-primary-700">
                <Award className="w-6 h-6 text-primary-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-primary-600 mr-2" />
              <span className="text-primary-600 font-semibold">Hargeisa, Somaliland 🇸🇴</span>
            </div>
            
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Building the Future of AI in Africa
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Software Engineer Student specializing in AI-powered SaaS development. 
              My mission is to bridge the technology gap in Africa by creating innovative solutions 
              that serve local markets while maintaining global standards.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              From university management systems to multilingual AI chatbots, I focus on 
              creating technology that empowers businesses and educational institutions 
              across the Horn of Africa region.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                <Calendar className="w-5 h-5 text-primary-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                  <div className="font-semibold text-gray-900 dark:text-white">5+ Years</div>
                </div>
              </div>
              <div className="flex items-center p-3 bg-secondary-50 dark:bg-secondary-900/20 rounded-lg">
                <Award className="w-5 h-5 text-secondary-600 mr-2" />
                <div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                  <div className="font-semibold text-gray-900 dark:text-white">50+ Completed</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="text-center p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;