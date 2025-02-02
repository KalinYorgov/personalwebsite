import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CV = () => {
  const [cvData, setCvData] = useState(null);

  useEffect(() => {
    fetch('/src/data/cv.json')
      .then((response) => response.json())
      .then((data) => setCvData(data))
      .catch((error) => console.error('Error loading CV data:', error));
  }, []);

  if (!cvData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8"
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{cvData.name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{cvData.title}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <p>📍 {cvData.contact.location}</p>
          <p>📱 {cvData.contact.phone}</p>
          <p>📧 {cvData.contact.email}</p>
          <a href={cvData.contact.linkedin} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">LinkedIn</a>
          <a href={cvData.contact.github} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">GitHub</a>
        </div>
      </header>

      {/* Summary Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Professional Summary</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{cvData.summary}</p>
      </section>

      {/* Certifications Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {cvData.certifications.map((cert, index) => (
            <li key={index} className="mb-2">{cert}</li>
          ))}
        </ul>
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Experience</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{exp.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvData.projects.map((project, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.programming.map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Education</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {cvData.education.map((edu, index) => (
            <li key={index} className="mb-2">{edu}</li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default CV; 