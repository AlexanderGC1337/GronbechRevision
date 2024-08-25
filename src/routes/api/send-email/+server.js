import { json } from '@sveltejs/kit';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
  const { navn, tlf, mail, cvr, emne, besked } = await request.json();

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL, // This needs to be a verified sender in SendGrid
    subject: `Ny henvendelse: ${emne}`,
    text: `
      Navn: ${navn}
      Telefon: ${tlf}
      Email: ${mail}
      CVR: ${cvr}
      Emne: ${emne}
      Besked: ${besked}
    `,
    html: `
      <h2>Ny henvendelse fra kontaktformular</h2>
      <p><strong>Navn:</strong> ${navn}</p>
      <p><strong>Telefon:</strong> ${tlf}</p>
      <p><strong>Email:</strong> ${mail}</p>
      <p><strong>CVR:</strong> ${cvr}</p>
      <p><strong>Emne:</strong> ${emne}</p>
      <p><strong>Besked:</strong> ${besked}</p>
    `,
  };

  try {
    await sgMail.send(msg);
    return json({ message: 'Email sendt succesfuldt' });
  } catch (error) {
    console.error('Fejl ved afsendelse af email:', error);
    return json({ message: 'Kunne ikke sende email' }, { status: 500 });
  }
}