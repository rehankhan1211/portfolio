import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      period: 'July 2025 - Current',
      title: 'Associate Software Engineer',
      company: 'Resolute AI Workspace',
      location: 'Bengaluru (Remote)',
      description:
        'Working as a full-time Associate Software Engineer building production-ready enterprise mobile applications with offline-first architecture.',
      projects: [
        {
          name: 'GKEL Digital Logbook',
          description: 'A GKEL tablet application developed for GMR Group Kamalanga, featuring secure login, role-based access control, offline-first architecture, and data synchronization.',
          technologies: ['Flutter', 'Dart', 'BLoC', 'Hive', 'SQLite', 'SharedPreferences'],
          achievements: [
            'Secure Login & Role-Based Access',
            'Offline Form Filling & Local Caching',
            'Automatic Data Sync with Conflict Handling',
            'Reduced APK size from 80MB to 35MB',
            'Optimized performance eliminating UI lag',
          ],
        },
        {
          name: 'Olam Agri WMS Mobile Application',
          description: 'A warehouse management mobile application built for Olam Agri, integrating real-time backend services and scanning capabilities.',
          technologies: ['Flutter', 'Dart', 'FastAPI', 'flutter_secure_storage', 'Lottie'],
          achievements: [
            'Warehouse Management Workflows',
            'QR Code & Barcode Scanning',
            'Figma-Accurate UI with Lottie Animations',
            'Secure Local Storage',
            'Collaborated with backend team on FastAPI integration',
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
        'Worked as the primary Flutter developer on select modules, coordinating with backend developers, QA engineers, and project managers. Developed and deployed multiple Flutter applications with focus on social features, payment integration, and location services.',
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
            'Firebase Integration, Push Notifications, Crash Analytics',
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
            'Firebase Integration, Push Notifications',
          ],
        },
      ],
      icon: '💼',
    },
    {
      period: 'Feb 2023 - April 2023',
      title: 'Java Developer Intern',
      company: 'InternPe',
      location: 'Remote',
      description:
        'Gained hands-on experience developing and maintaining scalable Java applications, contributing to RESTful APIs, debugging, code reviews, and SQL-based database design within an Agile team environment.',
      projects: [],
      icon: '☕',
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
                <motion.div
                  initial={{ height: 0 }}
                  animate={inView ? { height: 'calc(100% + 2rem)' } : { height: 0 }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.4 }}
                  className="absolute left-8 top-16 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 opacity-30 origin-top"
                />
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
                whileHover={{ scale: 1.02, x: 10 }}
                className="ml-24 sm:ml-32 bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.15)] transition-all duration-300"
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

        {/* Education */}
        <motion.div
          id="education"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold mb-6 text-cyan-400">Education</h3>
          <div className="space-y-4">
            {[
              {
                degree: 'Bachelor of Engineering — Computer Engineering',
                institution: 'Sinhgad Academy of Engineering, Pune',
                period: 'Jul 2020 – May 2024',
                icon: '🎓'
              },
              {
                degree: 'Class XII',
                institution: 'Dinanth Junior College, Nagpur',
                period: 'Jun 2019 – Mar 2020',
                icon: '🏫'
              }
            ].map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                className="flex flex-col md:flex-row md:justify-between md:items-center p-4 bg-slate-800/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all gap-4"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">{edu.icon}</span>
                  <div>
                    <h4 className="font-semibold text-slate-300 mb-1">{edu.degree}</h4>
                    <p className="text-sm text-cyan-400">{edu.institution}</p>
                  </div>
                </div>
                <div className="text-slate-400 font-semibold md:text-right whitespace-nowrap text-sm">
                  {edu.period}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          id="certifications"
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
