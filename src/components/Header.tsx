

// components/Header.tsx
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiLogOut, FiUser } from 'react-icons/fi';
import Button from './ui/Button';
import { User } from '../lib/auth';

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <header className="w-full backdrop-blur-md bg-dark-200/80 border-b border-white/10 fixed top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: 10 }}
            className="text-primary-500 text-2xl font-bold"
          >
            ✦
          </motion.div>
          <span className="text-white text-xl font-bold">NextAuth</span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleNav}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {user ? (
            <>
              <div className="flex items-center gap-2 text-white">
                <FiUser className="text-primary-500" />
                <span>{user.name}</span>
              </div>
              <Button variant="outline" onClick={onLogout} className="py-2">
                <FiLogOut size={16} /> Logout
              </Button>
            </>
          ) : (
            <>
              <Link href="/login" className={`text-gray-300 hover:text-white ${router.pathname === '/login' ? 'text-primary-500' : ''}`}>
                Login
              </Link>
              <Button variant="primary" onClick={() => router.push('/signup')} className="py-2">
                Sign Up
              </Button>
            </>
          )}
        </nav>

        {/* Mobile Nav */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-200 border-b border-white/10 py-4 md:hidden"
          >
            <div className="container mx-auto px-4 flex flex-col gap-4">
              {user ? (
                <>
                  <div className="flex items-center gap-2 text-white">
                    <FiUser className="text-primary-500" />
                    <span>{user.name}</span>
                  </div>
                  <Button variant="outline" onClick={onLogout} fullWidth>
                    <FiLogOut size={16} /> Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link 
                    href="/login" 
                    className={`text-gray-300 hover:text-white ${router.pathname === '/login' ? 'text-primary-500' : ''} py-2`}
                    onClick={toggleNav}
                  >
                    Login
                  </Link>
                  <Link 
                    href="/signup" 
                    className={`text-gray-300 hover:text-white ${router.pathname === '/signup' ? 'text-primary-500' : ''} py-2`}
                    onClick={toggleNav}
                  >
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;