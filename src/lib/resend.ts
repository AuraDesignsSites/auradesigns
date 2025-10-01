import { Resend } from 'resend';

// Get API key from environment variables
// In Vite, we need to use import.meta.env for client-side access
// In production (Vercel), this will be available as VITE_RESEND_API_KEY
const apiKey = import.meta.env.VITE_RESEND_API_KEY || import.meta.env.RESEND_API_KEY;

if (!apiKey) {
  throw new Error('RESEND_API_KEY environment variable is required. Please set VITE_RESEND_API_KEY in your .env.local file for local development.');
}

export const resend = new Resend(apiKey);
