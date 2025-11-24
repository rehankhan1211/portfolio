import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: '2024 - Present',
      title: 'Flutter Developer',
      company: 'Self-Employed / Freelance',
      description:
        'Developing and maintaining multiple Flutter applications with focus on clean architecture and user experience.',
      achievements: [
        'Built 3+ production-ready Flutter applications',
        'Implemented BLoC state management pattern',
        'Integrated REST APIs and Firebase services',
        'Achieved 90%+ code quality standards',
      ],
      icon: '🚀',
    },
    {
      period: '2023 - 2024',
      title: 'Mobile App Development',
      company: 'Learning & Development',
      description:
        'Intensive learning phase focusing on Flutter fundamentals, Dart programming, and mobile development best practices.',
      achievements: [
        'Mastered Flutter framework and Dart language',
        'Learned state management solutions (BLoC, Provider)',
        'Built multiple projects from scratch',
        'Studied clean code and architecture patterns',
      ],
      icon: '📚',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience & Journey</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            My professional journey and growth as a Flutter developer
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-20 bg-gradient-to-b from-cyan-500 to-purple-600 opacity-30" />
              )}

              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="absolute left-0 top-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg"
              >
                {exp.icon}
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="ml-32 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                    <span className="text-sm text-slate-400 font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-slate-400 font-semibold">{exp.company}</p>
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">
                    Key Achievements
                  </p>
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle size={18} className="text-cyan-400 flex-shrink-0 mt-1" />
                      <span className="text-slate-300 text-sm">{achievement}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 hover:from-cyan-500/10 hover:to-purple-500/10 pointer-events-none transition-all duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Learning Path */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Continuous Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Current Focus',
                items: ['Advanced Flutter Patterns', 'Performance Optimization', 'Web Development'],
              },
              {
                title: 'Future Goals',
                items: ['Full-Stack Development', 'Cloud Services', 'AI/ML Integration'],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold text-slate-300 mb-3">{section.title}</h4>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400">
                      <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
