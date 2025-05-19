'use client';
import { useState } from 'react';
import { signInWithEmail } from '../lib/supabase';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmail(email);
      setMessage('Check your email for a login link.');
    } catch (err) {
      setMessage('Failed to send magic link');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-xs">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="border p-2 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white rounded p-2 disabled:opacity-50"
      >
        Send Magic Link
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  );
}
