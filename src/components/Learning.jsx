import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BookOpen, Server, Code, Database, Globe } from 'lucide-react';

const Learning = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const topics = [
    { name: 'JavaScript Fundamentals', icon: <Code size={20} /> },
    { name: 'Node.js & Express.js', icon: <Server size={20} /> },
    { name: 'JWT & Session Authentication', icon: <BookOpen size={20} /> },
    { name: 'Docker & Containerization', icon: <Database size={20} /> },
    { name: 'AWS Deployment', icon: <Globe size={20} /> },
    { name: 'Backend Architecture & REST APIs', icon: <Server size={20} /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      id="learning"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-800 to-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="gradient-text">What I'm Learning Now</span>
          </h2>
          <p className="text-xl text-cyan-400 font-semibold mb-6">
            Working toward becoming a Full-Stack Mobile Developer
          </p>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            I'm expanding beyond Flutter frontend expertise into backend development to independently build and deploy complete full-stack applications.
          </p>
        </motion.div>

        {/* Topics Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(14, 165, 233, 0.2)' }}
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 hover:border-cyan-500/50"
            >
              <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-full">
                {topic.icon}
              </div>
              <h3 className="font-semibold text-slate-200 text-center">{topic.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Learning;
