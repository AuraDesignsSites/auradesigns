import { resend } from './resend';
import { EMAIL_CONFIG } from './constants';
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
    // Check if Resend is available
    if (!resend) {
      console.error('Resend not initialized - API key missing');
      return {
        success: false,
        message: 'Email service is not configured. Please contact us directly.',
        error: 'Service not available'
      };
    }

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

    // Send email using Resend
    const { data: emailData, error } = await resend.emails.send({
      from: EMAIL_CONFIG.from,
      to: EMAIL_CONFIG.to,
      replyTo: sanitizedData.email, // Allow direct replies to customer
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: generateEmailHTML(sanitizedData),
      // Add text version for better email client compatibility
      text: generateEmailText(sanitizedData),
    });

    if (error) {
      console.error('Resend error:', error);
      return {
        success: false,
        message: 'Failed to send email. Please try again later.',
        error: 'Email service error'
      };
    }

    return {
      success: true,
      message: 'Email sent successfully! We\'ll get back to you within 24-48 hours.',
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

const generateEmailText = (data: ContactFormData): string => {
  return `
AURA DESIGNS - New Contact Form Submission

CONTACT INFORMATION:
Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}

PROJECT DETAILS:
Project Type: ${data.projectType}
Budget Range: ${data.budget}
Timeline: ${data.timeline}

MESSAGE:
${data.message}

---
This email was sent from the Aura Designs contact form.
Reply directly to this email to respond to ${data.name}.
  `;
};

// Helper function to escape HTML content
const escapeHtml = (text: string): string => {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
};

const generateEmailHTML = (data: ContactFormData): string => {
  // Escape all user input to prevent XSS
  const safeData = {
    name: escapeHtml(data.name),
    email: escapeHtml(data.email),
    phone: data.phone ? escapeHtml(data.phone) : '',
    company: data.company ? escapeHtml(data.company) : '',
    projectType: escapeHtml(data.projectType),
    budget: escapeHtml(data.budget),
    timeline: escapeHtml(data.timeline),
    message: escapeHtml(data.message)
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f8fafc;">
      <div style="max-width: 600px; margin: 0 auto; background: #ffffff; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #7c3aed 100%); padding: 30px; text-align: center;">
          <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: bold; letter-spacing: 1px;">
            AURA DESIGNS
          </h1>
          <p style="color: #cbd5e1; margin: 10px 0 0 0; font-size: 16px;">
            New Contact Form Submission
          </p>
        </div>
        
        <!-- Content -->
        <div style="padding: 30px;">
          <!-- Contact Information -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #06b6d4;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; font-weight: 600; margin-bottom: 15px;">
              👤 Contact Information
            </h2>
            <div style="color: #475569; line-height: 1.6;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${safeData.name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${safeData.email}" style="color: #06b6d4; text-decoration: none;">${safeData.email}</a></p>
              ${safeData.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${safeData.phone}" style="color: #06b6d4; text-decoration: none;">${safeData.phone}</a></p>` : ''}
              ${safeData.company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${safeData.company}</p>` : ''}
            </div>
          </div>

          <!-- Project Details -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #7c3aed;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; font-weight: 600; margin-bottom: 15px;">
              🚀 Project Details
            </h2>
            <div style="color: #475569; line-height: 1.6;">
              <p style="margin: 8px 0;"><strong>Project Type:</strong> ${safeData.projectType}</p>
              <p style="margin: 8px 0;"><strong>Budget Range:</strong> ${safeData.budget}</p>
              <p style="margin: 8px 0;"><strong>Timeline:</strong> ${safeData.timeline}</p>
            </div>
          </div>

          <!-- Message -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #10b981;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; font-weight: 600; margin-bottom: 15px;">
              💬 Message
            </h2>
            <div style="color: #475569; line-height: 1.6; white-space: pre-wrap; background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">${safeData.message}</div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This email was sent from the Aura Designs contact form.
            </p>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">
              Reply directly to this email to respond to ${safeData.name}.
            </p>
            <p style="color: #94a3b8; font-size: 12px; margin: 10px 0 0 0;">
              Aura Designs - Digital Solutions for the Modern World
            </p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};
