import { useEffect, useRef, useState } from 'react';
import type {
  ChangeEvent,
  ClipboardEvent,
  FormEvent,
  KeyboardEvent,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeVerifyCode, fakeResendCode } from '../services/mockApi';

const CODE_LENGTH = 6;
const RESEND_SECONDS = 30;

type CodeFormProps = {
  tempToken: string;
};

export default function CodeForm({ tempToken }: CodeFormProps) {
  const navigate = useNavigate();
  const [digits, setDigits] = useState<string[]>(Array(CODE_LENGTH).fill(''));
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  // countdown: runs once per second until it reaches 0
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setTimeout(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearTimeout(id);
  }, [secondsLeft]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, '').slice(-1);
    const next = [...digits];
    next[index] = value;
    setDigits(next);

    if (value && index < CODE_LENGTH - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !digits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData('text')
      .replace(/\D/g, '')
      .slice(0, CODE_LENGTH);
    if (!pasted) return;

    const next: string[] = Array(CODE_LENGTH).fill('');
    pasted.split('').forEach((char, i) => (next[i] = char));
    setDigits(next);
    inputsRef.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus();
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError('');

    const code = digits.join('');
    if (code.length < CODE_LENGTH) {
      setServerError('Enter all 6 digits');
      return;
    }

    setLoading(true);
    try {
      const result = await fakeVerifyCode(code, tempToken);
      localStorage.setItem('accessToken', result.accessToken);
      navigate('/home');
    } catch (err) {
      setServerError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    setServerError('');
    setResending(true);
    try {
      await fakeResendCode(tempToken);
      setDigits(Array(CODE_LENGTH).fill(''));
      setSecondsLeft(RESEND_SECONDS); 
      inputsRef.current[0]?.focus();
    } catch (err) {
      setServerError((err as Error).message);
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="auth-shell">
      <form onSubmit={handleSubmit} className="auth-card auth-form">
        <div className="brand">
          <div className="brand-mark">2FA</div>
          <span>Secure Access</span>
        </div>

        <div>
          <h2 className="auth-title">Verify your identity</h2>
          <p className="auth-subtitle">Your code was sent to you via email.</p>
        </div>

        <div className="field">
          <div className="otp-row" aria-label="One-time code input">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputsRef.current[index] = el;
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                autoFocus={index === 0}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                onPaste={handlePaste}
                className="otp-box"
              />
            ))}
          </div>
        </div>

        {serverError && <p className="inline-message error">{serverError}</p>}

        <button type="submit" className="primary-button" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </button>

        <p className="auth-help">
          Didn't receive code?{' '}
          {secondsLeft > 0 ? (
            <span>Request again in {secondsLeft}s</span>
          ) : (
            <button
              type="button"
              className="secondary-button"
              onClick={handleResend}
              disabled={resending}
            >
              {resending ? 'Sending...' : 'Request again'}
            </button>
          )}
        </p>
      </form>
    </div>
  );
}
