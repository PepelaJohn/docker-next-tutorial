
// components/ui/Card.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isGlass?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', isGlass = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-xl shadow-lg ${isGlass ? 'glass-effect' : 'bg-dark-100'} p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;