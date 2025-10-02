import { Resend } from 'resend';

// Get API key from environment variables
// In production, this will be injected by Vercel
const apiKey = import.meta.env.RESEND_API_KEY || '';

// Only create Resend instance if we have an API key
export const resend = apiKey ? new Resend(apiKey) : null;
