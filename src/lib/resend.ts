import { Resend } from 'resend';

// API key will be available at build time in production
const apiKey = import.meta.env.VITE_RESEND_API_KEY || '';

export const resend = new Resend(apiKey);
