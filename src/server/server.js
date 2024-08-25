import dotenv from 'dotenv';
import express from 'express';
import sgMail from '@sendgrid/mail';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('build')); // Assuming 'build' is where your SvelteKit app is built

// Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { navn, tlf, mail, cvr, emne, besked } = req.body;

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
    res.status(200).json({ message: 'Email sendt succesfuldt' });
  } catch (error) {
    console.error('Fejl ved afsendelse af email:', error);
    res.status(500).json({ message: 'Kunne ikke sende email' });
  }
});

// Serve the SvelteKit app for any other routes
app.get('*', (req, res) => {
  res.sendFile(resolve(__dirname, '../../build/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server kører på port ${PORT}`);
});