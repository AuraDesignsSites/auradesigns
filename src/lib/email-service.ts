import { z } from 'zod';

// Validation schema for contact form with enhanced security
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s\-'\.]+$/, 'Name contains invalid characters'),
  email: z.string()
    .email('Invalid email address')
    .max(254, 'Email must be less than 254 characters'),
  phone: z.string()
    .optional()
    .refine((val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/[\s\-\(\)]/g, '')), 'Invalid phone number format'),
  company: z.string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  projectType: z.string()
    .min(1, 'Project type is required')
    .max(50, 'Project type must be less than 50 characters'),
  budget: z.string()
    .min(1, 'Budget range is required')
    .max(50, 'Budget range must be less than 50 characters'),
  timeline: z.string()
    .min(1, 'Timeline is required')
    .max(50, 'Timeline must be less than 50 characters'),
  message: z.string()
    .min(10, 'Message must be at least 10 characters')
    .max(2000, 'Message must be less than 2000 characters')
    .refine((val) => !/<script|javascript:|on\w+\s*=/i.test(val), 'Message contains potentially harmful content'),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

// Rate limiting to prevent spam (simple in-memory store for demo)
const rateLimit = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS_PER_WINDOW = 3;

const checkRateLimit = (email: string): boolean => {
  const now = Date.now();
  const key = email.toLowerCase();
  const userLimit = rateLimit.get(key);

  if (!userLimit || now - userLimit.lastReset > RATE_LIMIT_WINDOW) {
    rateLimit.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (userLimit.count >= MAX_REQUESTS_PER_WINDOW) {
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

