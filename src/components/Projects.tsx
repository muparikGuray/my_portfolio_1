import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Project } from '../types';

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'SmartUni - University Management System',
      description: 'An intelligent university management platform with AI-powered features for student enrollment, course management, and academic analytics. Built to streamline educational administration.',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      techStack: ['Python', 'React', 'PostgreSQL', 'AI APIs', 'Tailwind CSS'],
      liveUrl: 'https://smartuni-demo.com',
      githubUrl: 'https://github.com/mubarikguray/smartuni'
    },
    {
      id: 2,
      title: 'GURAY_AI - Multilingual Desktop Chatbot',
      description: 'A desktop AI chatbot application with support for both Somali and English languages. Features natural conversation capabilities and local processing for privacy-focused interactions.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      techStack: ['Python', 'AI APIs', 'Desktop GUI', 'NLP', 'Multilingual Processing'],
      liveUrl: 'https://guray-ai-demo.com',
      githubUrl: 'https://github.com/mubarikguray/guray-ai'
    },
    {
      id: 3,
      title: 'AI-Powered Attendance Platform',
      description: 'An intelligent attendance management system using computer vision and AI to automate student and employee attendance tracking with real-time analytics and reporting.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      techStack: ['Python', 'Computer Vision', 'React', 'PostgreSQL', 'AI APIs'],
      liveUrl: 'https://attendance-ai-demo.com',
      githubUrl: 'https://github.com/mubarikguray/attendance-ai'
    },
    {
      id: 4,
      title: 'Clinic Management System',
      description: 'A comprehensive healthcare management platform for clinics with patient records, appointment scheduling, billing, and medical inventory management features.',
      image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
      techStack: ['PHP', 'JavaScript', 'PostgreSQL', 'Bootstrap', 'Chart.js'],
      liveUrl: 'https://clinic-manager-demo.com',
      githubUrl: 'https://github.com/mubarikguray/clinic-management'
    },
    {
      id: 5,
      title: 'SaaS Business Tools Suite',
      description: 'A collection of business automation tools including CRM, project management, and analytics dashboards. Designed specifically for small to medium businesses in emerging markets.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      techStack: ['Next.js', 'React', 'PostgreSQL', 'Tailwind CSS', 'API Integration'],
      liveUrl: 'https://business-tools-demo.com',
      githubUrl: 'https://github.com/mubarikguray/saas-business-tools'
    },
    {
      id: 6,
      title: 'Educational Video Platform',
      description: 'A comprehensive e-learning platform with video content management, student progress tracking, and interactive features. Includes professional videography and content creation tools.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
      techStack: ['React', 'Node.js', 'Video Processing', 'PostgreSQL', 'Videography Tools'],
      liveUrl: 'https://edu-video-demo.com',
      githubUrl: 'https://github.com/mubarikguray/educational-platform'
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 dark:border-blue-900/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
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
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
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