import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import cvData from '../data/cv.json';
import { Card } from './ui/card';

const Experience = () => {
  // Add useEffect to reset scroll position on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

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

      {/* Updated Projects Section with enhanced depth and shadow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cvData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-light tracking-wide mb-2 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-deepblue/70 dark:text-cream/90">
                    {project.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Updated Skills Section with enhanced depth and shadow */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-xl font-light tracking-wide mb-2 text-center text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Programming
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cvData.skills.programming.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-cream/50 dark:bg-olivegreen/50 text-deepblue dark:text-cream px-3 py-1 rounded-full text-sm backdrop-blur-md border border-gold/10 shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)]">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <h3 className="text-xl font-light tracking-wide mb-2 text-center text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Tools
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {cvData.skills.tools.map((tool, index) => (
                    <span
                      key={index}
                      className="bg-cream/50 dark:bg-olivegreen/50 text-deepblue dark:text-cream px-3 py-1 rounded-full text-sm backdrop-blur-md border border-gold/10 shadow-sm"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
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