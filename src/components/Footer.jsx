import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-sm">
              FD
            </div>
            <span className="text-lg font-bold gradient-text">Flutter Dev</span>
          </div>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-6 max-w-md mx-auto">
            Building beautiful mobile applications with Flutter. Let's create something amazing together.
          </p>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
            {['Home', 'Projects', 'Skills', 'Experience', 'Contact'].map((link) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                whileHover={{ color: '#06b6d4' }}
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>
              © {currentYear} Flutter Developer. All rights reserved.
            </p>
            <p>
              Designed & Built with <span className="text-cyan-400">💙</span> using React & Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
