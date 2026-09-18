import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useNavigate } from 'react-router-dom';
import useAuthStore from '../store/auth.store';

const LoginSchema = z.object({
  email: z.string().email('Enter a valid email address'),
  password: z.string().min(1, 'Password is required'),
});

type LoginInput = z.infer<typeof LoginSchema>;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);
  const [loginError, setLoginError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = (data: LoginInput) => {
    const success = login(data.email, data.password);
    if (success) {
      navigate('/users');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="login-title">
        <div className="auth-header">
          <p className="auth-eyebrow">User management</p>
          <h1 id="login-title">Welcome back</h1>
          <p className="auth-subtitle">
            Sign in to continue managing your users.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-field">
            <label htmlFor="login-email">Email address</label>
            <input
              id="login-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...register('email')}
            />
            {errors.email && (
              <p className="auth-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              type="password"
              autoComplete="current-password"
              placeholder="Enter your password"
              {...register('password')}
            />
            {errors.password && (
              <p className="auth-field-error">{errors.password.message}</p>
            )}
          </div>

          {loginError && (
            <p className="auth-error" role="alert">
              {loginError}
            </p>
          )}

          <button className="auth-submit" type="submit">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don&apos;t have an account? <Link to="/register">Create one</Link>
        </p>
      </section>
    </main>
  );
};

export default LoginPage;
