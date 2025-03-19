
// components/AuthForm.tsx
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Input from './ui/Input';
import Button from './ui/Button';
import Card from './ui/Card';

interface AuthFormProps {
  mode: 'login' | 'signup';
  onSubmit: (data: any) => Promise<boolean>;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onFormSubmit = async (data: any) => {
    setIsLoading(true);
    setError('');
    
    try {
      const success = await onSubmit(data);
      if (success) {
        router.push('/dashboard');
      } else {
        setError(mode === 'login' ? 'Invalid email or password' : 'Failed to create account');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">
          {mode === 'login' ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className="text-gray-400">
          {mode === 'login' 
            ? 'Sign in to access your dashboard' 
            : 'Sign up to get started with our platform'}
        </p>
      </motion.div>

      {error && (
        <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 mb-4">
          <p className="text-red-200 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onFormSubmit)}>
        {mode === 'signup' && (
          <div className="mb-4">
            <Input
              id="name"
              label="Full Name"
              placeholder="John Doe"
              required
              error={errors.name?.message as string}
              {...register('name', { required: 'Name is required' })}
            />
          </div>
        )}
        
        <div className="mb-4">
          <Input
            id="email"
            type="email"
            label="Email Address"
            placeholder="you@example.com"
            required
            error={errors.email?.message as string}
            {...register('email', { 
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address'
              }
            })}
          />
        </div>
        
        <div className="mb-6">
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="••••••••"
            required
            error={errors.password?.message as string}
            {...register('password', { 
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
          />
        </div>
        
        <Button 
          type="submit"
          variant="primary"
          fullWidth
          disabled={isLoading}
          className="mb-4"
        >
          {isLoading ? 'Loading...' : mode === 'login' ? 'Sign In' : 'Create Account'}
          <FiArrowRight />
        </Button>
      </form>

      <p className="text-center text-gray-400 text-sm mt-4">
        {mode === 'login' 
          ? "Don't have an account? " 
          : "Already have an account? "}
        <Link href={mode === 'login' ? '/signup' : '/login'} className="text-primary-500 hover:text-primary-400">
          {mode === 'login' ? 'Sign up' : 'Sign in'}
        </Link>
      </p>
    </Card>
  );
};

export default AuthForm;