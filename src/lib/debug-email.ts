// Debug utility to check email configuration
// This file can be removed in production

import { EMAIL_CONFIG } from './constants';

export const debugEmailConfig = () => {
  console.log('=== EMAIL CONFIGURATION DEBUG ===');
  console.log('From:', EMAIL_CONFIG.from);
  console.log('To:', EMAIL_CONFIG.to);
  console.log('Reply-To:', EMAIL_CONFIG.replyTo);
  console.log('Environment Variable:', import.meta.env.VITE_RESEND_API_KEY ? '✅ Set' : '❌ Not set');
  console.log('================================');
  
  return {
    from: EMAIL_CONFIG.from,
    to: EMAIL_CONFIG.to,
    replyTo: EMAIL_CONFIG.replyTo,
    hasApiKey: !!import.meta.env.VITE_RESEND_API_KEY
  };
};

// Uncomment to run debug
// debugEmailConfig();
