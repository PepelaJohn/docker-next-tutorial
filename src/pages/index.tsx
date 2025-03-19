// pages/index.tsx
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import Button from '../components/ui/Button';
import { useAuth } from '../lib/auth';
import { FiArrowRight } from 'react-icons/fi';

const Home: NextPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  return (
    <Layout title="NextAuth App - Modern Authentication">
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-primary-500">Secure</span> &amp; <span className="text-primary-500">Modern</span> Authentication
          </h1>
          <p className="text-xl text-gray-300 mb-10">
            A NextJS application with TypeScript, TailwindCSS, and Framer Motion for a modern and responsive user experience.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {user ? (
              <Button variant="primary" onClick={() => router.push('/dashboard')}>
                Go to Dashboard <FiArrowRight />
              </Button>
            ) : (
              <>
                <Button variant="primary" onClick={() => router.push('/login')}>
                  Sign In <FiArrowRight />
                </Button>
                <Button variant="outline" onClick={() => router.push('/signup')}>
                  Create Account <FiArrowRight />
                </Button>
              </>
            )}
          </div>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">Modern UI</h3>
            <p className="text-gray-300">
              Clean and responsive design with animations and glass morphism effects.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">TypeScript</h3>
            <p className="text-gray-300">
              Fully typed codebase for better development experience and fewer bugs.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass-effect p-6 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-2">Next.js</h3>
            <p className="text-gray-300">
              Built with Next.js for lightning-fast page loads and seamless navigation.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;