import { Resend } from 'resend';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const {
      name,
      email,
      phone,
      company,
      projectType,
      budget,
      timeline,
      message
    } = req.body;

    // Basic validation
    if (!name || !email || !projectType || !budget || !timeline || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields',
        success: false 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Invalid email address',
        success: false 
      });
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Aura Designs <noreply@mail.auradesigns.net>',
      to: ['auradesigns.team@gmail.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: generateEmailHTML({
        name,
        email,
        phone: phone || '',
        company: company || '',
        projectType,
        budget,
        timeline,
        message
      }),
      text: generateEmailText({
        name,
        email,
        phone: phone || '',
        company: company || '',
        projectType,
        budget,
        timeline,
        message
      }),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ 
        error: 'Failed to send email',
        success: false 
      });
    }

    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully! We\'ll get back to you within 24-48 hours.',
      id: data?.id
    });

  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Internal server error',
      success: false 
    });
  }
}

function generateEmailText(data: any): string {
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
}

function generateEmailHTML(data: any): string {
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
              <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}" style="color: #06b6d4; text-decoration: none;">${escapeHtml(data.email)}</a></p>
              ${data.phone ? `<p style="margin: 8px 0;"><strong>Phone:</strong> <a href="tel:${escapeHtml(data.phone)}" style="color: #06b6d4; text-decoration: none;">${escapeHtml(data.phone)}</a></p>` : ''}
              ${data.company ? `<p style="margin: 8px 0;"><strong>Company:</strong> ${escapeHtml(data.company)}</p>` : ''}
            </div>
          </div>

          <!-- Project Details -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #7c3aed;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; font-weight: 600; margin-bottom: 15px;">
              🚀 Project Details
            </h2>
            <div style="color: #475569; line-height: 1.6;">
              <p style="margin: 8px 0;"><strong>Project Type:</strong> ${escapeHtml(data.projectType)}</p>
              <p style="margin: 8px 0;"><strong>Budget Range:</strong> ${escapeHtml(data.budget)}</p>
              <p style="margin: 8px 0;"><strong>Timeline:</strong> ${escapeHtml(data.timeline)}</p>
            </div>
          </div>

          <!-- Message -->
          <div style="background: #f8fafc; padding: 25px; border-radius: 12px; margin-bottom: 25px; border-left: 4px solid #10b981;">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 20px; font-weight: 600; margin-bottom: 15px;">
              💬 Message
            </h2>
            <div style="color: #475569; line-height: 1.6; white-space: pre-wrap; background: #ffffff; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">${escapeHtml(data.message)}</div>
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
            <p style="color: #64748b; font-size: 14px; margin: 0;">
              This email was sent from the Aura Designs contact form.
            </p>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">
              Reply directly to this email to respond to ${escapeHtml(data.name)}.
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
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}
