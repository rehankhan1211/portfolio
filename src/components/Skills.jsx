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
      skills: [
        { name: 'Flutter', level: 90 },
        { name: 'Dart', level: 90 },
        { name: 'Mobile UI/UX', level: 85 },
        { name: 'State Management', level: 85 },
      ],
      icon: '📱',
    },
    {
      category: 'State Management & Architecture',
      skills: [
        { name: 'BLoC Pattern', level: 85 },
        { name: 'Provider', level: 80 },
        { name: 'Clean Architecture', level: 85 },
        { name: 'MVVM', level: 80 },
      ],
      icon: '🏗️',
    },
    {
      category: 'Backend & APIs',
      skills: [
        { name: 'REST APIs', level: 85 },
        { name: 'Firebase', level: 80 },
        { name: 'HTTP Requests', level: 85 },
        { name: 'JSON Parsing', level: 90 },
      ],
      icon: '🔌',
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Android Studio', level: 90 },
        { name: 'VS Code', level: 90 },
        { name: 'Figma', level: 75 },
      ],
      icon: '🛠️',
    },
    {
      category: 'Web Development',
      skills: [
        { name: 'React', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Responsive Design', level: 90 },
      ],
      icon: '🌐',
    },
    {
      category: 'Core Competencies',
      skills: [
        { name: 'Problem Solving', level: 90 },
        { name: 'Code Quality', level: 85 },
        { name: 'Testing', level: 80 },
        { name: 'Documentation', level: 85 },
      ],
      icon: '⚡',
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

  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-slate-300">{name}</span>
        <span className="text-xs text-cyan-400 font-bold">{level}%</span>
      </div>
      <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
        />
      </div>
    </div>
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
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 pointer-events-none transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { label: 'Projects Completed', value: '3+', icon: '📊' },
            { label: 'Years Experience', value: '1', icon: '📅' },
            { label: 'Code Quality', value: 'High', icon: '✨' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 text-center hover:border-cyan-500/50 transition-all"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
              <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
