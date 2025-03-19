
import type { NextPage } from 'next';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import AuthForm from '../components/AuthForm';
import { useAuth } from '../lib/auth';

const Login: NextPage = () => {
  const { user, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleLogin = async (data: { email: string; password: string }) => {
    return login(data.email, data.password);
  };

  return (
    <Layout title="Login - NextAuth App">
      <div className="min-h-[70vh] flex flex-col items-center justify-center py-12">
        <AuthForm mode="login" onSubmit={handleLogin} />
      </div>
    </Layout>
  );
};

export default Login;

// pages/signup.tsx