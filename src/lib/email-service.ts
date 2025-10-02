import { z } from 'zod';
import { FORM_LIMITS, PERFORMANCE_THRESHOLDS } from './constants';
import type { ContactFormData, EmailResponse, RateLimitEntry } from './types';

// Validation schema for contact form with enhanced security
export const contactFormSchema = z.object({
  name: z.string()
    .min(FORM_LIMITS.NAME_MIN, `Name must be at least ${FORM_LIMITS.NAME_MIN} characters`)
    .max(FORM_LIMITS.NAME_MAX, `Name must be less than ${FORM_LIMITS.NAME_MAX} characters`)
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(FORM_LIMITS.EMAIL_MAX, `Email must be less than ${FORM_LIMITS.EMAIL_MAX} characters`),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)]/g, '')), 'Invalid phone number format'),
  company: z.string()
    .max(FORM_LIMITS.COMPANY_MAX, `Company name must be less than ${FORM_LIMITS.COMPANY_MAX} characters`)
    .optional(),
  projectType: z.string()
    .min(1, 'Project type is required')
    .max(FORM_LIMITS.PROJECT_TYPE_MAX, `Project type must be less than ${FORM_LIMITS.PROJECT_TYPE_MAX} characters`),
  budget: z.string()
    .min(1, 'Budget range is required')
    .max(FORM_LIMITS.BUDGET_MAX, `Budget range must be less than ${FORM_LIMITS.BUDGET_MAX} characters`),
  timeline: z.string()
    .min(1, 'Timeline is required')
    .max(FORM_LIMITS.TIMELINE_MAX, `Timeline must be less than ${FORM_LIMITS.TIMELINE_MAX} characters`),
  message: z.string()
    .min(FORM_LIMITS.MESSAGE_MIN, `Message must be at least ${FORM_LIMITS.MESSAGE_MIN} characters`)
    .max(FORM_LIMITS.MESSAGE_MAX, `Message must be less than ${FORM_LIMITS.MESSAGE_MAX} characters`)
    .refine((val) => !/<script|javascript:|on\w+\s*=/i.test(val), 'Message contains potentially harmful content'),
});

export type { ContactFormData, EmailResponse };

// Rate limiting to prevent spam (simple in-memory store for demo)
const rateLimit = new Map<string, RateLimitEntry>();

const checkRateLimit = (email: string): boolean => {
  const now = Date.now();
  const key = email.toLowerCase();
  const userLimit = rateLimit.get(key);

  if (!userLimit || now - userLimit.lastReset > PERFORMANCE_THRESHOLDS.RATE_LIMIT_WINDOW) {
    rateLimit.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (userLimit.count >= PERFORMANCE_THRESHOLDS.MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  userLimit.count++;
  return true;
};

export const sendContactEmail = async (data: ContactFormData): Promise<EmailResponse> => {
  try {
    // Rate limiting check
    if (!checkRateLimit(data.email)) {
      return {
        success: false,
        message: 'Too many requests. Please wait 15 minutes before trying again.',
        error: 'Rate limit exceeded'
      };
    }

    // Validate the data
    const validatedData = contactFormSchema.parse(data);

    // Sanitize data for email
    const sanitizedData = {
      ...validatedData,
      name: validatedData.name.trim(),
      email: validatedData.email.toLowerCase().trim(),
      phone: validatedData.phone ? validatedData.phone.trim() : '',
      company: validatedData.company ? validatedData.company.trim() : '',
      message: validatedData.message.trim()
    };

    // Send email via Vercel serverless function (server-side)
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sanitizedData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return {
        success: false,
        message: errorData.message || 'Failed to send email. Please try again later.',
        error: errorData.error || 'Email service error'
      };
    }

    const result = await response.json();

    return {
      success: true,
      message: result.message || 'Email sent successfully! We\'ll get back to you within 24-48 hours.',
    };

  } catch (error) {
    console.error('Email sending error:', error);
    
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: 'Please check your form data and try again',
        error: error.errors.map(e => e.message).join(', ')
      };
    }

    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
      error: 'Internal server error'
    };
  }
};

