import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { motion } from 'framer-motion';
import promptsData from '../data/prompts.json';

const Prompts = () => {
  const [prompts, setPrompts] = useState([]);
  const [selectedPrompt, setSelectedPrompt] = useState(null);
  
  useEffect(() => {
    setPrompts(promptsData);
    // Set the first prompt as selected by default
    if (promptsData.length > 0) {
      setSelectedPrompt(promptsData[0]);
    }
  }, []);

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
    // Scroll to top of the article when a new one is selected
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      className="container mx-auto px-4 py-8 mt-32"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-deepblue dark:text-cream">AI Prompts & Insights</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar with list of prompts */}
        <div className="md:w-1/4">
          <h2 className="text-xl font-semibold mb-4 text-deepblue dark:text-cream">All Posts</h2>
          <div className="bg-cream/30 dark:bg-olivegreen/30 backdrop-blur-md rounded-lg p-4 border border-gold/20">
            <ul className="space-y-2">
              {prompts.map((prompt) => (
                <li 
                  key={prompt.id}
                  className={`cursor-pointer p-2 rounded-md hover:bg-cream/50 dark:hover:bg-olivegreen/50 transition ${
                    selectedPrompt?.id === prompt.id ? 'bg-cream/50 dark:bg-olivegreen/50 font-medium border-l-2 border-gold' : ''
                  }`}
                  onClick={() => handlePromptSelect(prompt)}
                >
                  <h3 className="font-medium text-deepblue dark:text-cream">{prompt.title}</h3>
                  <p className="text-sm text-deepblue/70 dark:text-cream/70">{prompt.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="md:w-3/4">
          {selectedPrompt ? (
            <motion.article 
              className="bg-cream/30 dark:bg-olivegreen/30 backdrop-blur-md rounded-lg shadow-md p-6 border border-gold/20"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-deepblue dark:text-cream">{selectedPrompt.title}</h2>
              <div className="flex flex-wrap items-center text-deepblue/70 dark:text-cream/70 mb-4">
                <span>{selectedPrompt.date}</span>
                <span className="mx-2">•</span>
                <div className="flex flex-wrap gap-2">
                  {selectedPrompt.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-block bg-cream/50 dark:bg-olivegreen/50 border border-gold/20 rounded-full px-3 py-1 text-xs text-deepblue dark:text-cream"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none text-deepblue dark:text-cream prose-headings:text-deepblue dark:prose-headings:text-cream prose-a:text-gold hover:prose-a:text-gold/80">
                <ReactMarkdown 
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    a: ({ node, ...props }) => (
                      <a {...props} target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold/80 hover:underline transition-colors" />
                    ),
                    img: ({ node, ...props }) => (
                      <div className="my-6">
                        <img {...props} className="rounded-lg shadow-md max-w-full mx-auto border border-gold/20" alt={props.alt || 'Article image'} />
                        {props.alt && <p className="text-center text-sm text-deepblue/70 dark:text-cream/70 mt-2">{props.alt}</p>}
                      </div>
                    ),
                    p: ({ node, ...props }) => (
                      <p {...props} className="text-deepblue dark:text-cream" />
                    ),
                    ul: ({ node, ...props }) => (
                      <ul {...props} className="text-deepblue dark:text-cream list-disc pl-6" />
                    ),
                    li: ({ node, ...props }) => (
                      <li {...props} className="text-deepblue dark:text-cream mb-2" />
                    ),
                    h3: ({ node, ...props }) => (
                      <h3 {...props} className="text-lg font-semibold text-deepblue dark:text-cream mt-6 mb-4" />
                    )
                  }}
                >
                  {selectedPrompt.content}
                </ReactMarkdown>
              </div>
            </motion.article>
          ) : (
            <div className="text-center py-12 bg-cream/30 dark:bg-olivegreen/30 backdrop-blur-md rounded-lg p-6 border border-gold/20">
              <p className="text-deepblue/70 dark:text-cream/70">Select a prompt to view its content</p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Prompts; 