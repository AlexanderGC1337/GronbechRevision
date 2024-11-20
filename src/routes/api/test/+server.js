import { json } from '@sveltejs/kit';
import { GMAIL_USER } from '$env/static/private';

export function GET() {
    return json({
        hasGmailUser: !!GMAIL_USER,
        envVarsLoaded: process.env.NODE_ENV
    });
}