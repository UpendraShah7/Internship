import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';
import { RegisterSchema, type RegisterInput } from '../schema/auth.schema';
import useAuthStore from '../store/auth.store';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const register = useAuthStore((state) => state.register);

  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  const onSubmit = (data: RegisterInput) => {
    register({
      id: crypto.randomUUID(),
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });
    navigate('/login');
  };

  return (
    <main className="auth-page">
      <section className="auth-card" aria-labelledby="register-title">
        <div className="auth-header">
          <p className="auth-eyebrow">User management</p>
          <h1 id="register-title">Create your account</h1>
          <p className="auth-subtitle">
            Set up an account to start managing users.
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-field">
            <label htmlFor="register-name">Full name</label>
            <input
              id="register-name"
              autoComplete="name"
              placeholder="Your full name"
              {...registerField('fullName')}
            />
            {errors.fullName && (
              <p className="auth-field-error">{errors.fullName.message}</p>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="register-email">Email address</label>
            <input
              id="register-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              {...registerField('email')}
            />
            {errors.email && (
              <p className="auth-field-error">{errors.email.message}</p>
            )}
          </div>

          <div className="auth-field">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a password"
              {...registerField('password')}
            />
            {errors.password && (
              <p className="auth-field-error">{errors.password.message}</p>
            )}
          </div>

          <button className="auth-submit" type="submit">
            Register
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </section>
    </main>
  );
};

export default RegisterPage;
