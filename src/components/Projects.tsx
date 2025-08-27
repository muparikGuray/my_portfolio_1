import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SmartUni - University Management System',
      description: 'A comprehensive university management platform featuring AI-powered student enrollment, intelligent course scheduling, and real-time academic analytics. Designed specifically for African educational institutions.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      techStack: ['Python', 'React', 'PostgreSQL', 'AI APIs', 'Tailwind CSS'],
      liveUrl: 'https://smartuni-demo.vercel.app',
      githubUrl: 'https://github.com/mubarikguray/smartuni',
      status: 'completed',
      featured: true
    },
    {
      id: 2,
      title: 'GURAY_AI - Multilingual Desktop Chatbot',
      description: 'An advanced desktop AI assistant supporting Somali, English, and Arabic languages. Features offline processing, cultural context awareness, and specialized knowledge for East African markets.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      techStack: ['Python', 'AI APIs', 'Desktop GUI', 'NLP', 'Multilingual Processing'],
      liveUrl: 'https://guray-ai-demo.vercel.app',
      githubUrl: 'https://github.com/mubarikguray/guray-ai',
      status: 'active',
      featured: true
    },
    {
      id: 3,
      title: 'AI-Powered Attendance Platform',
      description: 'Revolutionary attendance system using facial recognition and AI analytics. Reduces manual tracking by 95% while providing detailed insights into attendance patterns and student engagement.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      techStack: ['Python', 'Computer Vision', 'React', 'PostgreSQL', 'AI APIs'],
      liveUrl: 'https://attendance-ai-demo.vercel.app',
      githubUrl: 'https://github.com/mubarikguray/attendance-ai',
      status: 'completed',
      featured: true
    },
    {
      id: 4,
      title: 'Clinic Management System',
      description: 'Complete healthcare management solution with electronic health records, automated appointment scheduling, integrated billing system, and pharmaceutical inventory management.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      techStack: ['PHP', 'JavaScript', 'PostgreSQL', 'Bootstrap', 'Chart.js'],
      liveUrl: 'https://clinic-manager-demo.vercel.app',
      githubUrl: 'https://github.com/mubarikguray/clinic-management',
      status: 'completed',
      featured: false
    },
    {
      id: 5,
      title: 'SaaS Business Tools Suite',
      description: 'Integrated business automation platform featuring CRM, project management, financial analytics, and team collaboration tools. Tailored for SMEs in emerging African markets.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      techStack: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'API Integration'],
      liveUrl: 'https://business-tools-demo.vercel.app',
      githubUrl: 'https://github.com/mubarikguray/saas-business-tools',
      status: 'active',
      featured: true
    },
    {
      id: 6,
      title: 'Educational Video Platform',
      description: 'Advanced e-learning platform with HD video streaming, interactive quizzes, progress analytics, and content creation tools. Features multilingual support and offline viewing capabilities.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      techStack: ['React', 'Node.js', 'Video Processing', 'PostgreSQL', 'Videography Tools'],
      liveUrl: 'https://edu-video-demo.vercel.app',
      githubUrl: 'https://github.com/mubarikguray/educational-platform',
      status: 'completed',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-white via-blue-50 to-purple-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of innovative solutions and cutting-edge applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-100 dark:border-primary-900/30 hover:border-primary-300 dark:hover:border-primary-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute top-4 left-4 z-10">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  project.status === 'active' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                }`}>
                  {project.status === 'active' ? 'Live' : 'Completed'}
                </span>
              </div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 rounded-full text-gray-700 hover:bg-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded text-xs font-medium hover:bg-primary-100 dark:hover:bg-primary-800/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Show All Projects Card */}
          <motion.div
            className="group bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-primary-200 dark:border-primary-800 hover:border-primary-300 dark:hover:border-primary-700 flex items-center justify-center min-h-[400px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                More Projects
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Explore my complete portfolio on GitHub
              </p>
              <motion.a
                href="https://github.com/mubarikguray"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4 mr-2" />
                View All
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/mubarikguray"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-lg font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 focus:ring-4 focus:ring-primary-600/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;