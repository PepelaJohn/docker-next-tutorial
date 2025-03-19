// components/ui/Button.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  fullWidth = false,
  disabled = false,
  className = '',
}) => {
  const baseClasses = 'flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 ease-in-out';
  const variantClasses = {
    primary: 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-glow',
    secondary: 'bg-dark-100 hover:bg-dark-200 text-white border border-white/10 hover:border-white/20',
    outline: 'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/30',
  };
  const widthClasses = fullWidth ? 'w-full' : '';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses} ${disabledClasses} ${className} px-6 py-3`}
    >
      {children}
    </motion.button>
  );
};

export default Button;