// Test utility for email functionality
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
