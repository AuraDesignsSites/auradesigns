// Business contact information constants
export const BUSINESS_EMAIL = 'auradesigns.team@gmail.com';
export const BUSINESS_DOMAIN = 'mail.auradesigns.net';
export const BUSINESS_NAME = 'Aura Designs';

// Email configuration
export const EMAIL_CONFIG = {
  from: `${BUSINESS_NAME} <noreply@${BUSINESS_DOMAIN}>`,
  to: [BUSINESS_EMAIL] as string[],
  replyTo: BUSINESS_EMAIL,
};
