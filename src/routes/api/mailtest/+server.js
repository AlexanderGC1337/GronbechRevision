import nodemailer from 'nodemailer';
import { json } from '@sveltejs/kit';
import { GMAIL_USER, GMAIL_APP_PASSWORD } from '$env/static/private';

export async function GET() {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_APP_PASSWORD
            }
        });

        const verify = await transporter.verify();
        return json({ success: true, verify });
    } catch (error) {
        return json({
            error: error.message,
            code: error.code,
            name: error.name
        }, { status: 500 });
    }
}