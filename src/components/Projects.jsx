import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const getImageUrl = (imagePath) => {
    return `${process.env.PUBLIC_URL || ''}/${imagePath}`;
  };

  const handlePrevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const projects = [
    {
      id: 1,
      title: '🎬 MovieMate',
      description:
        'MovieMate is a Flutter-based movie browsing and discovery application designed with a modern black-and-gold theme. It provides users with trending movies, detailed information, cast lists, and ratings, offering a smooth and visually engaging browsing experience.',
      technologies: ['Flutter', 'Dart', 'BLoC', 'HTTP', 'JSON'],
      features: ['Trending Movies', 'Movie Details & Cast', 'Fast API Loading', 'Black-Gold UI Theme', 'Smooth Navigation'],
      images: ['mm1.jpg', 'mm2.jpg', 'mm3.jpg', 'mm4.jpg', 'mm5.jpg'],
      github: 'https://github.com/rehankhan1211/moviemate',
      live: '#',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      id: 2,
      title: '🐍 Snaky',
      description:
        'Snaky is a cross-platform Snake game built with Flutter and Dart, offering modern gameplay enhancements such as difficulty levels, multiple game modes, theme support, swipe controls, and persistent high-score tracking.',
      technologies: ['Flutter', 'Dart', 'Provider', 'SharedPreferences', 'Material Design'],
      features: ['Multiple Difficulty Levels', 'Swipe Controls', 'Light/Dark/System Themes', 'High Score Tracking', 'Cross-Platform Support'],
      images: ['sg1.jpg', 'sg2.jpg', 'sg3.jpg', 'sg4.jpg', 'sg5.jpg'],
      github: 'https://github.com/rehankhan1211/snake_game',
      live: '#',
      color: 'from-purple-500 to-pink-600',
    },
    {
      id: 3,
      title: '🏨 TripNest',
      description:
        'TripNest is a modern Flutter-based hotel discovery app offering fast hotel search, Google authentication, multi-currency support, and detailed hotel information. Built with MVVM architecture for clean code and scalability.',
      technologies: ['Flutter', 'Dart', 'Provider', 'Google Sign-In', 'HTTP'],
      features: ['Google Authentication', 'Smart Hotel Search', 'Multi-Currency Support', 'Infinite Scroll', 'Detailed Hotel Info'],
      images: ['tn1.jpg', 'tn2.jpg', 'tn3.jpg', 'tn4.jpg', 'tn5.jpg'],
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
                  <motion.button
                    onClick={() => {
                      setSelectedProject(project);
                      setCurrentImageIndex(0);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 rounded-lg text-sm font-semibold transition-colors border border-cyan-500/50"
                  >
                    📸 Screenshots
                  </motion.button>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-600 rounded-lg text-sm font-semibold transition-colors"
                  >
                    <Github size={16} />
                    Code
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
          <motion.a
            href="https://github.com/rehankhan1211?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Screenshots Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <h3 className="text-2xl font-bold text-cyan-400">{selectedProject.title}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-slate-700 rounded-lg transition-colors"
                >
                  <X size={24} className="text-slate-400" />
                </motion.button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-auto p-6">
                {/* Image Display */}
                <div className="mb-6 relative h-96 bg-slate-700/50 rounded-lg overflow-hidden flex items-center justify-center">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={getImageUrl(selectedProject.images[currentImageIndex])}
                    alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlePrevImage}
                        className="absolute left-4 p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition-colors"
                      >
                        <ChevronLeft size={24} className="text-cyan-400" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNextImage}
                        className="absolute right-4 p-2 bg-cyan-500/20 hover:bg-cyan-500/40 rounded-lg transition-colors"
                      >
                        <ChevronRight size={24} className="text-cyan-400" />
                      </motion.button>
                    </>
                  )}
                </div>

                {/* Image Counter */}
                <div className="text-center mb-6">
                  <p className="text-slate-400">
                    Screenshot {currentImageIndex + 1} of {selectedProject.images.length}
                  </p>
                </div>

                {/* Thumbnail Grid */}
                {selectedProject.images.length > 1 && (
                  <div className={`grid gap-2 ${
                    selectedProject.images.length <= 5 ? 'grid-cols-5' :
                    selectedProject.images.length <= 8 ? 'grid-cols-4' :
                    selectedProject.images.length <= 12 ? 'grid-cols-3' :
                    'grid-cols-2'
                  }`}>
                    {selectedProject.images.map((image, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        whileHover={{ scale: 1.05 }}
                        className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex
                            ? 'border-cyan-400'
                            : 'border-slate-600 hover:border-slate-500'
                        }`}
                      >
                        <img
                          src={getImageUrl(image)}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-1 left-1 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded">
                          {idx + 1}
                        </div>
                      </motion.button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
