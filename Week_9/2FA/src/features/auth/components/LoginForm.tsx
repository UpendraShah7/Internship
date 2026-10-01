import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { fakeLogin } from '../services/mockApi';
import CodeForm from './CodeForm';
import { loginSchema, type LoginValues } from '../../../schema/loginSchema';

export default function LoginForm() {
  const [tempToken, setTempToken] = useState<string | null>(null);
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginValues) => {
    setServerError('');
    try {
      const result = await fakeLogin(data.email, data.password);
      setTempToken(result.tempToken);
    } catch (err) {
      setServerError((err as Error).message);
    }
  };

  if (tempToken) {
    return <CodeForm tempToken={tempToken} />;
  }

  return (
    <div className="auth-shell">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-card auth-form">
        <div className="brand">
          <div className="brand-mark">2FA</div>
          <span>Secure Access</span>
        </div>

        <div>
          <h2 className="auth-title">Welcome back</h2>
          <p className="auth-subtitle">Sign in to continue to your account.</p>
        </div>

        <div className="field">
          <label htmlFor="email">Email address</label>
          <input
            id="email"
            type="email"
            placeholder="name@example.com"
            {...register('email')}
          />
          {errors.email && (
            <p className="field-error">{errors.email.message}</p>
          )}
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            {...register('password')}
          />
          {errors.password && (
            <p className="field-error">{errors.password.message}</p>
          )}
        </div>

        {serverError && <p className="inline-message error">{serverError}</p>}

        <button
          type="submit"
          className="primary-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Checking...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
