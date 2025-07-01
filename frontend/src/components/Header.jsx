import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Zap } from 'lucide-react';


const Header= ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DMS Pro
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </a>
            <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors">
              Modules
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
              Benefits
            </a> */}
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
            >
              Get Demo
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-gray-200"
          >
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </a>
              <a href="#modules" className="text-gray-700 hover:text-blue-600 transition-colors">
                Modules
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-blue-600 transition-colors">
                Benefits
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium w-full">
                Get Demo
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;