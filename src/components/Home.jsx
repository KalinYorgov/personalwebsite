import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm Kalin Yorgov
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Full Stack Developer & AI Enthusiast
        </motion.p>
      </motion.section>

      {/* Quick Links Section */}
      <motion.section 
        className="py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          <Link to="/cv" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">CV</h2>
              <p className="text-gray-600 dark:text-gray-300">View my professional experience and skills</p>
            </div>
          </Link>
          
          <Link to="/projects" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Projects</h2>
              <p className="text-gray-600 dark:text-gray-300">Explore my latest work and contributions</p>
            </div>
          </Link>
          
          <Link to="/prompts" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">AI Prompts</h2>
              <p className="text-gray-600 dark:text-gray-300">Discover effective AI development prompts</p>
            </div>
          </Link>
          
          <Link to="/blog" className="group">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">Blog</h2>
              <p className="text-gray-600 dark:text-gray-300">Read my thoughts and insights</p>
            </div>
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        className="py-12 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">About Me</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I’m a Salesforce Commerce Cloud Developer and B2C Commerce Architect with experience in optimizing high-traffic e-commerce platforms, integrating payment systems, and improving site performance. I specialize in React-Native, JavaScript, and AI-driven solutions, developing scalable and efficient digital commerce systems.
          <br></br>My work includes building custom checkout solutions, refining user experiences, and solving complex technical challenges to ensure smooth and reliable online transactions. I focus on delivering practical, high-quality solutions that meet business needs and improve overall system efficiency.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default Home; 