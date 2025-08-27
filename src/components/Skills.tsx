import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Brain, Cloud } from 'lucide-react';
import { Skill } from '../types';

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: 'Python', level: 95, category: 'backend' },
    { name: 'JavaScript', level: 85, category: 'frontend' },
    { name: 'React/Next.js', level: 88, category: 'frontend' },
    { name: 'PHP', level: 82, category: 'backend' },
    { name: 'AI APIs Integration', level: 85, category: 'ai' },
    { name: 'Tailwind CSS', level: 90, category: 'frontend' },
    { name: 'PostgreSQL', level: 80, category: 'backend' },
    { name: 'SaaS Development', level: 85, category: 'other' },
    { name: 'Desktop Applications', level: 75, category: 'other' },
    { name: 'Multilingual AI', level: 80, category: 'ai' },
    { name: 'Computer Vision', level: 75, category: 'ai' },
    { name: 'Videography', level: 70, category: 'other' },
    { name: 'UI/UX Design', level: 78, category: 'frontend' }
  ];

  const categories = [
    { name: 'Frontend', icon: Code2, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'AI/ML', icon: Brain, color: 'from-purple-500 to-pink-500' },
    { name: 'DevOps', icon: Cloud, color: 'from-orange-500 to-red-500' }
  ];

  const getCategorySkills = (category: string) => 
    skills.filter(skill => {
      switch (category) {
        case 'Frontend': return skill.category === 'frontend';
        case 'Backend': return skill.category === 'backend';
        case 'AI/ML': return skill.category === 'ai';
        case 'DevOps': return skill.category === 'other';
        default: return false;
      }
    });

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Expertise across the modern technology stack
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-blue-100 dark:border-blue-900/30"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {getCategorySkills(category.name).map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and methodologies to stay at the forefront of software development and AI innovation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;