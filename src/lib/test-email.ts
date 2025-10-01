// Test utility for email functionality
// This file can be removed in production

import { sendContactEmail } from './email-service';
import { EMAIL_CONFIG } from './constants';

export const testEmail = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+1234567890',
    company: 'Test Company',
    projectType: 'website',
    budget: '5k-10k',
    timeline: '1-3-months',
    message: 'This is a test message to verify email functionality.'
  };

  try {
    console.log('Email Configuration:', EMAIL_CONFIG);
    console.log('Sending test email...');
    const result = await sendContactEmail(testData);
    console.log('Email result:', result);
    return result;
  } catch (error) {
    console.error('Test email failed:', error);
    return { success: false, message: 'Test failed', error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

// Uncomment the line below to test email functionality
// testEmail();

// For testing in browser console:
// import { testEmail } from './lib/test-email';
// testEmail();
