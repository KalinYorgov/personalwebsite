import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card } from './ui/card';
import { useRef } from 'react';

const Home = () => {
  const scrollRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen">
      <main className="relative">
        <section
          ref={scrollRef}
          className="min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
        >
          <motion.div style={{ opacity, scale }} className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm uppercase tracking-[0.2em] text-gold mb-6"
            >
              Full Stack Developer & AI Enthusiast
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-light tracking-tight mb-8 text-deepblue dark:text-cream"
            >
              Kalin Yorgov
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="h-px w-24 bg-gold mx-auto"
            />
          </motion.div>
        </section>

        <section className="max-w-4xl mx-auto px-4 py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Experience", desc: "Professional journey" },
              { title: "Projects", desc: "Showcase of work" },
              { title: "Skills", desc: "Technical expertise" },
              { title: "AI Prompts", desc: "Effective prompts collection" }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link to={`/${item.title.toLowerCase()}`}>
                  <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-colors">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-light tracking-wide mb-2 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-deepblue/70 dark:text-cream/90">
                        {item.desc}
                      </p>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4 pb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
          >
            <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20">
              <div className="p-8 text-center">
                <h2 className="text-3xl font-light tracking-tight mb-6 text-deepblue dark:text-cream">About Me</h2>
                <div className="space-y-4 text-deepblue/80 dark:text-cream/90">
                  <p>
                    As a Salesforce Commerce Cloud Developer and B2C Commerce Architect, I specialize in crafting
                    bespoke e-commerce solutions that blend cutting-edge technology with elegant user experiences.
                  </p>
                  <p>
                    My expertise lies in developing sophisticated, scalable systems that not only meet but exceed the
                    expectations of discerning clients. With a focus on React-Native, JavaScript, and AI-driven
                    solutions, I create digital experiences that are as beautiful as they are functional.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Home; 