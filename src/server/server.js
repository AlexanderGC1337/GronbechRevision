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
app.use(express.static('build'));

// Set up SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { navn, tlf, mail, cvr, emne, besked } = req.body;

  // Log the environment variables (remove in production)
  console.log('FROM_EMAIL:', process.env.FROM_EMAIL);
  console.log('TO_EMAIL:', process.env.TO_EMAIL);

  const msg = {
    to: process.env.TO_EMAIL,
    from: process.env.FROM_EMAIL,
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
    console.log('Attempting to send email...');
    console.log('Message details:', JSON.stringify(msg, null, 2));
    
    const [response] = await sgMail.send(msg);
    
    console.log('SendGrid Response:', JSON.stringify(response, null, 2));
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log('Email sent successfully');
      res.status(200).json({ message: 'Email sendt succesfuldt' });
    } else {
      console.error('Unexpected status code from SendGrid:', response.statusCode);
      res.status(500).json({ message: 'Uventet fejl ved afsendelse af email' });
    }
  } catch (error) {
    console.error('Error sending email:', error);
    if (error.response) {
      console.error(error.response.body);
    }
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