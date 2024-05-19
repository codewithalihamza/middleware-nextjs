'use client';
import { useState } from 'react';

import { cookies } from '@/config/cookies-config';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const token = 'fakeToken123';
    cookies.set('token', token);
    alert('Login successful!');
    router.push('/');
  };

  return (
    <div className="container">
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="form">
          <div className="inputContainer">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="buttonContainer">
            <button type="submit" className="button">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
