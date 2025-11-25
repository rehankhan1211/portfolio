import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      id: 1,
      title: 'MovieMate',
      description:
        'MovieMate is a Flutter-based movie browsing and discovery application designed with a modern black-and-gold theme. It provides users with trending movies, detailed information, cast lists, and ratings, offering a smooth and visually engaging browsing experience.',
      technologies: ['Flutter', 'Dart', 'BLoC', 'HTTP', 'JSON'],
      features: ['Trending Movies', 'Movie Details & Cast', 'Fast API Loading', 'Black-Gold UI Theme', 'Smooth Navigation'],
      images: ['/mm1.jpg', '/mm2.jpg', '/mm3.jpg', '/mm4.jpg', '/mm5.jpg'],
      github: 'https://github.com/rehankhan1211/moviemate',
      live: '#',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Snaky',
      description:
        'Snaky is a cross-platform Snake game built with Flutter and Dart, offering modern gameplay enhancements such as difficulty levels, multiple game modes, theme support, swipe controls, and persistent high-score tracking.',
      technologies: ['Flutter', 'Dart', 'Provider', 'SharedPreferences', 'Material Design'],
      features: ['Multiple Difficulty Levels', 'Swipe Controls', 'Light/Dark/System Themes', 'High Score Tracking', 'Cross-Platform Support'],
      images: ['/sg1.jpg', '/sg2.jpg', '/sg3.jpg', '/sg4.jpg', '/sg5.jpg'],
      github: 'https://github.com/rehankhan1211/snake_game',
      live: '#',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: 'TripNest',
      description:
        'TripNest is a modern Flutter-based hotel discovery app offering fast hotel search, Google authentication, multi-currency support, and detailed hotel information. Built with MVVM architecture for clean code and scalability.',
      technologies: ['Flutter', 'Dart', 'Provider', 'Google Sign-In', 'HTTP'],
      features: ['Google Authentication', 'Smart Hotel Search', 'Multi-Currency Support', 'Infinite Scroll', 'Detailed Hotel Info'],
      images: ['/tn1.jpg', '/tn2.jpg', '/tn3.jpg', '/tn4.jpg', '/tn5.jpg'],
      github: 'https://github.com/rehankhan1211/tripnest_hotel_app',
      live: '#',
      color: 'from-green-500 to-emerald-600',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-800"
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
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Showcasing my best work and technical expertise in Flutter development
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group relative bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Image Carousel */}
                <div className="mb-4 relative h-48 bg-slate-700/50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22%3E%3Crect fill=%22%23334155%22 width=%22400%22 height=%22300%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 font-size=%2220%22 fill=%22%2394a3b8%22 text-anchor=%22middle%22 dy=%22.3em%22%3EImage not found%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <p className="text-xs text-slate-500 font-semibold mb-2">KEY FEATURES</p>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-cyan-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <ExternalLink size={16} />
                    View
                  </motion.a>
                </div>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 pointer-events-none transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
