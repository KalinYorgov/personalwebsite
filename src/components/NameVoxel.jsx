import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const NameVoxel = () => {
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
      <Link to="/projects" className="inline-flex items-center mb-6 text-deepblue dark:text-cream hover:text-gold transition-colors">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Projects
      </Link>

      <header className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src="/assets/project-images/namevoxel-icon.svg"
            alt="NameVoxel"
            className="w-32 h-32 rounded-2xl shadow-lg"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-deepblue dark:text-cream">NameVoxel</h1>
        <p className="text-xl text-deepblue/80 dark:text-cream/80">
          AI-Powered Domain Name Finder
        </p>
      </header>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Overview</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-6">
              <strong>NameVoxel</strong> is an AI-powered domain name generator that helps entrepreneurs, startups, and businesses find the perfect domain for their next project in minutes. Simply describe your idea, and NameVoxel instantly provides creative, brandable domain suggestions with real-time availability checking.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-deepblue dark:text-cream">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="text-3xl font-bold text-gold mb-3">1</div>
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Enter Your Idea
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Describe your product, business, or project in a few words to get started
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="text-3xl font-bold text-gold mb-3">2</div>
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Choose Search Type
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Select between Standard Search (free) or AI-Powered Generation (premium)
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="text-3xl font-bold text-gold mb-3">3</div>
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Get Instant Results
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Receive real-time domain suggestions with instant availability check - green means available
                </p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <Card className="group relative overflow-hidden backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 hover:border-gold/50 transition-all duration-300 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-deepblue/5 dark:from-gold/10 dark:to-cream/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-6">
                <div className="text-3xl font-bold text-gold mb-3">4</div>
                <h3 className="text-xl font-semibold mb-3 text-deepblue dark:text-cream group-hover:text-gold transition-colors">
                  Register Your Domain
                </h3>
                <p className="text-deepblue/80 dark:text-cream/80">
                  Use the direct link to Namecheap to complete your domain purchase instantly
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-deepblue dark:text-cream">Search Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-deepblue dark:text-cream">Standard Search</h3>
              <p className="text-gold font-semibold mb-4">Free</p>
              <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
                <li>10 free searches</li>
                <li>Instant availability check</li>
                <li>Multiple domain suggestions</li>
                <li>Direct registration links</li>
              </ul>
            </div>
          </Card>

          <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
            <div className="p-8">
              <h3 className="text-xl font-bold mb-4 text-deepblue dark:text-cream">AI-Powered Generation</h3>
              <p className="text-gold font-semibold mb-4">$2.99 one-time</p>
              <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
                <li>25 AI-powered searches</li>
                <li>Creative AI-generated names</li>
                <li>Brandable suggestions</li>
                <li>Detailed rationale for each name</li>
                <li>No account required</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Simple Pricing</h2>
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed mb-4">
              NameVoxel offers a simple, transparent pricing model with no subscriptions. The AI-Powered Generation feature is available for a <strong>one-time payment of $2.99</strong>, giving you 25 AI-powered searches to find your perfect domain name.
            </p>
            <ul className="list-disc list-inside text-deepblue/80 dark:text-cream/80 space-y-2">
              <li>Pay once, use your searches - no recurring fees</li>
              <li>No account creation required</li>
              <li>Instant access after payment</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-deepblue dark:text-cream">Trust & Security</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">Secure Payments</h3>
                <p className="text-deepblue/80 dark:text-cream/80">All transactions processed securely via Stripe</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">Instant Access</h3>
                <p className="text-deepblue/80 dark:text-cream/80">Start using your searches immediately after payment</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-deepblue dark:text-cream">No Subscription</h3>
                <p className="text-deepblue/80 dark:text-cream/80">One-time payment, no recurring charges or hidden fees</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="mb-12">
        <Card className="backdrop-blur-md bg-cream/30 dark:bg-olivegreen/30 border-gold/20 shadow-[0_10px_20px_rgba(0,0,0,0.07)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)]">
          <div className="p-8">
            <p className="text-deepblue/80 dark:text-cream/80 leading-relaxed italic">
              NameVoxel combines the power of AI with instant domain availability checking to help you find brandable, memorable domain names for your next project - whether you're launching a startup, building a side project, or expanding your business online.
            </p>
          </div>
        </Card>
      </section>

      <section className="mb-12 text-center">
        <a
          href="https://namevoxel.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-gold/20 hover:bg-gold/30 backdrop-blur-md border border-gold/40 rounded-lg text-deepblue dark:text-cream font-semibold transition-all duration-300 hover:shadow-lg"
        >
          Visit NameVoxel
        </a>
      </section>
    </motion.div>
  );
};

export default NameVoxel;
