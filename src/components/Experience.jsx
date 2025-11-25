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
      period: 'July 2025 - Current',
      title: 'Flutter Developer Intern',
      company: 'Resolute AI Workspace',
      location: 'Bengaluru (Remote)',
      description:
        'Developing Flutter applications with focus on local storage, authentication, and role-based access control.',
      projects: [
        {
          name: 'GKEL Digital Lookbook',
          description: 'A Gokuldas Leave Management tablet application developed for GMR Group Kamalanga exclusively for its operational incharge and Shift engineer.',
          technologies: ['Flutter', 'Dart', 'BLoC'],
          achievements: [
            'Built and deployed local Storage platform for saving and offline use (Hive, SQLite, Shared Preferences)',
            'Implemented employee authentication and role-based access',
            'Implemented a flush mechanism to clear or sync local data with the server to maintain consistency',
          ],
        },
      ],
      icon: '🚀',
    },
    {
      period: 'Nov 2024 - April 2025',
      title: 'Flutter Developer Intern',
      company: 'Destek InfoSolutions Pvt. LTD',
      location: 'Pune (Onsite)',
      description:
        'Developed and deployed multiple Flutter applications with focus on social features, payment integration, and location services.',
      projects: [
        {
          name: 'TSHA Connect',
          link: 'https://apps.apple.com/in/app/tsha-connect/id6738424073',
          description: 'A mobile application developed for the Telangana State Hotel Association (TSHA) exclusively for its members and office bearers.',
          technologies: ['Flutter', 'Dart', 'GetX'],
          achievements: [
            'Built and deployed social interaction features (posts, likes, comments, shares)',
            'Integrated YouTube player for media content',
            'Implemented membership registration and renewal',
            'Integrated payment gateway using Easebuzz',
          ],
        },
        {
          name: 'LeadZilla',
          link: 'https://apps.apple.com/in/app/leadzilla/id6744964153',
          description: 'A Sales CRM mobile application for seamless lead tracking and management.',
          technologies: ['Flutter', 'Dart', 'Provider', 'Google Maps API'],
          achievements: [
            'Collaborated with 5 sales representatives to gather feedback and iteratively refine the application',
            'Incorporated 10+ user-requested features and improvements in lead management workflows',
            'Enabled seamless lead tracking and performance analytics (monthly and yearly)',
            'Integrated Google Maps for accurate restaurant location tracking',
          ],
        },
      ],
      icon: '💼',
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
                  {exp.location && <p className="text-slate-500 text-sm">{exp.location}</p>}
                </div>

                {/* Description */}
                <p className="text-slate-400 mb-4">{exp.description}</p>

                {/* Projects */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="space-y-4">
                    {exp.projects.map((project, projIdx) => (
                      <div key={projIdx} className="bg-slate-700/30 rounded-lg p-4 border border-slate-600/50">
                        {/* Project Name */}
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-cyan-300">{project.name}</h4>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 hover:text-cyan-300 text-xs font-semibold"
                            >
                              View App →
                            </a>
                          )}
                        </div>

                        {/* Project Description */}
                        <p className="text-slate-400 text-sm mb-3">{project.description}</p>

                        {/* Technologies */}
                        {project.technologies && (
                          <div className="flex flex-wrap gap-2 mb-3">
                            {project.technologies.map((tech, techIdx) => (
                              <span
                                key={techIdx}
                                className="px-2 py-1 bg-slate-600/50 text-cyan-300 text-xs rounded border border-cyan-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Achievements */}
                        {project.achievements && (
                          <div className="space-y-1">
                            {project.achievements.map((achievement, achIdx) => (
                              <motion.div
                                key={achIdx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                                transition={{ duration: 0.4, delay: 0.2 + achIdx * 0.05 }}
                                className="flex items-start gap-2"
                              >
                                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full flex-shrink-0 mt-1.5" />
                                <span className="text-slate-300 text-xs">{achievement}</span>
                              </motion.div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-purple-500/0 hover:from-cyan-500/10 hover:to-purple-500/10 pointer-events-none transition-all duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-cyan-500/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Certifications</h3>
          <div className="space-y-4">
            {[
              {
                title: 'Mobile App Development with Flutter and Dart (iOS and Android)',
                issuer: 'Udemy',
                icon: '📱',
              },
              {
                title: 'Introduction to Core Java and CPP',
                issuer: 'Orange I-Tech Pvt. Ltd.',
                icon: '☕',
              },
            ].map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="flex items-start gap-4 p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all"
              >
                <span className="text-2xl flex-shrink-0">{cert.icon}</span>
                <div className="flex-grow">
                  <h4 className="font-semibold text-slate-300 mb-1">{cert.title}</h4>
                  <p className="text-sm text-cyan-400">{cert.issuer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
