

// components/Layout.tsx
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Header from './Header';
import { useAuth } from '../lib/auth';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  title = 'NextAuth App', 
  description = 'A modern authentication app built with Next.js and TypeScript' 
}) => {
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header user={user} onLogout={logout} />

      <main className="container mx-auto px-4 pt-24 pb-12 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} NextAuth App. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;