// lib/auth.ts
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export type User = {
  id: string;
  name: string;
  email: string;
};

// Mock user data
const MOCK_USER: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // In a real app, you would make an API call here
    if (email === MOCK_USER.email && password === 'password') {
      setUser(MOCK_USER);
      localStorage.setItem('user', JSON.stringify(MOCK_USER));
      return true;
    }
    return false;
  };

  const signup = async (name: string, email: string, password: string) => {
    // In a real app, you would make an API call here
    const newUser = { ...MOCK_USER, name, email };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return {
    user,
    loading,
    login,
    signup,
    logout,
  };
};
