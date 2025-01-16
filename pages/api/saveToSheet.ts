import { google } from 'googleapis';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      // Autenticar con Google Sheets API
      const auth = new google.auth.GoogleAuth({
        credentials: JSON.parse(process.env.CREDENTIAL_JSON || ''),
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
      });

      const sheets = google.sheets({ version: 'v4', auth });

      const spreadsheetId = '1mdqE_aP8ltZ5-dq6mh-RtbCeKEIL4ukwCT0rYSkKTnw'; // Reemplaza con el ID de tu hoja

      // Escribir datos en la hoja
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: 'Contact!A:D',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[name, email, message, new Date().toISOString()]],
        },
      });

      res.status(200).json({ status: 'success', message: 'Datos guardados correctamente.' });
    } catch (error) {
      res.status(500).json({ status: 'error', message: error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
