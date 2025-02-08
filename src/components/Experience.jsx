import React from 'react';
import { motion } from 'framer-motion';
import cvData from '../data/cv.json';

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto py-8 mt-24"
    >
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-deepblue dark:text-cream">{cvData.name}</h1>
        <p className="text-xl text-deepblue/80 dark:text-cream/80 mb-4">{cvData.title}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-deepblue/70 dark:text-cream/70">
          <p>📍 {cvData.contact.location}</p>
          <p>📱 {cvData.contact.phone}</p>
          <p>📧 {cvData.contact.email}</p>
          <a href={cvData.contact.linkedin} className="hover:text-gold transition-colors duration-200">LinkedIn</a>
          <a href={cvData.contact.github} className="hover:text-gold transition-colors duration-200">GitHub</a>
        </div>
      </header>

      {/* Rest of the sections with updated colors */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Professional Summary</h2>
        <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed">{cvData.summary}</p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Certifications</h2>
        <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80">
          {cvData.certifications.map((cert, index) => (
            <li key={index} className="mb-2">{cert}</li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Experience</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-xl font-semibold text-deepblue dark:text-cream">{exp.title}</h3>
            <p className="text-deepblue/70 dark:text-cream/70 mb-2">{exp.company}</p>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80">
              {exp.achievements.map((achievement, idx) => (
                <li key={idx} className="mb-1">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cvData.projects.map((project, index) => (
            <div key={index} className="bg-cream/30 dark:bg-olivegreen/30 p-4 rounded-lg backdrop-blur-md">
              <h3 className="text-xl font-semibold mb-2 text-deepblue dark:text-cream">{project.name}</h3>
              <p className="text-deepblue/80 dark:text-cream/80">{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-deepblue dark:text-cream">Programming</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.programming.map((skill, index) => (
                <span
                  key={index}
                  className="bg-cream/50 dark:bg-olivegreen/50 text-deepblue dark:text-cream px-3 py-1 rounded-full text-sm backdrop-blur-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-deepblue dark:text-cream">Tools</h3>
            <div className="flex flex-wrap gap-2">
              {cvData.skills.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-cream/50 dark:bg-olivegreen/50 text-deepblue dark:text-cream px-3 py-1 rounded-full text-sm backdrop-blur-md"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Education</h2>
        <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80">
          {cvData.education.map((edu, index) => (
            <li key={index} className="mb-2">{edu}</li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
};

export default Experience; 