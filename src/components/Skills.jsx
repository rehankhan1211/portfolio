import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      category: 'Mobile Development',
      skills: ['Flutter', 'Dart', 'Mobile UI/UX', 'Custom Widgets'],
      icon: '📱',
    },
    {
      category: 'State Management Tools',
      skills: ['BLoC Pattern (Primary)', 'Redux', 'Provider', 'Riverpod', 'GetX'],
      icon: '🏗️',
    },
    {
      category: 'Architectures',
      skills: ['Clean Architecture', 'MVVM', 'MVC'],
      icon: '🏛️',
    },
    {
      category: 'Backend & APIs',
      skills: ['FastAPI', 'Node.js (In Progress — Beginner to Advance course, Udemy)', 'Express.js (In Progress)', 'REST API Integration', 'Payment Gateway Integration', 'Google Maps Integration', 'JSON File Handling'],
      icon: '🔌',
    },
    {
      category: 'Programming & Testing',
      skills: ['Java (Core)', 'Unit Tests', 'Navigation & Routing', 'Third-party Packages'],
      icon: '⚙️',
    },
    {
      category: 'Database & Storage',
      skills: ['MySQL', 'Hive', 'SQLite', 'Local Storage'],
      icon: '💾',
    },
    {
      category: 'Tools & Platforms',
      skills: ['Xcode', 'Firebase', 'Android Studio', 'VS Code', 'Git & GitHub', 'Postman'],
      icon: '🛠️',
    },
    {
      category: 'Deployment & Release',
      skills: ['Play Store Release', 'App Store Release', 'Production Builds', 'Publishing Production Apps'],
      icon: '🚀',
    },
    {
      category: 'Core CS & Fundamentals',
      skills: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'System Design Fundamentals'],
      icon: '🧠',
    },
    {
      category: 'Security & Auth',
      skills: ['Token Handling', 'Session Persistence', 'flutter_secure_storage', 'Role-Based Access Control'],
      icon: '🔒',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  };

  const SkillTag = ({ name }) => (
    <motion.span
      variants={tagVariants}
      whileHover={{ scale: 1.05 }}
      className="inline-block px-3 py-1.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 rounded-full text-sm font-medium text-cyan-300 hover:border-cyan-400 hover:from-cyan-500/30 hover:to-purple-500/30 transition-all cursor-default"
    >
      {name}
    </motion.span>
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300" />

              {/* Content */}
              <div className="relative">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-lg font-bold group-hover:text-cyan-400 transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skills */}
                <motion.div
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
                  }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </motion.div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 pointer-events-none transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
