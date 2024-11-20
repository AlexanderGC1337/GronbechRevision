// src/routes/api/contact/+server.js
import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { GMAIL_USER, GMAIL_APP_PASSWORD } from '$env/static/private';

export async function POST({ request }) {
    try {
        // Log the environment variables (remove in production)
        console.log('Checking env vars:', {
            hasGmailUser: !!GMAIL_USER,
            hasAppPassword: !!GMAIL_APP_PASSWORD
        });

        // Log the incoming request data
        const body = await request.json();
        console.log('Received form data:', {
            ...body,
            email: body.email ? '[REDACTED]' : undefined // Don't log actual email
        });

        // Create transporter with verbose logging
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_APP_PASSWORD
            },
            debug: true, // Enable debug logging
            logger: true  // Enable logger
        });

        // Verify transporter configuration
        try {
            await transporter.verify();
            console.log('Transporter verification successful');
        } catch (verifyError) {
            console.error('Transporter verification failed:', verifyError);
            return json({ error: 'Email configuration error' }, { status: 500 });
        }

        const mailOptions = {
            from: GMAIL_USER,
            to: GMAIL_USER,
            replyTo: body.email,
            subject: `New Contact Form Message from ${body.name}`,
            text: `
        Name: ${body.name}
        Email: ${body.email}
        Tlf nr: ${body.tlf}
        cvr nr: ${body.cvr}
        Message: ${body.message}
      `
        };

        console.log('Attempting to send email...');
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.messageId);

        return json({ success: true, messageId: info.messageId });
    } catch (error) {
        // Log the full error
        console.error('Detailed error:', {
            message: error.message,
            stack: error.stack,
            code: error.code,
            command: error.command
        });

        // Return a more specific error message
        return json({
            error: 'Failed to send email',
            details: error.message,
            code: error.code
        }, { status: 500 });
    }
}

// Add a GET handler for testing
export async function GET() {
    return json({ status: 'Contact endpoint is working' });
}