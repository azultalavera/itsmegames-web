import fs from 'fs';
import path from 'path';
import admin from 'firebase-admin';

// Inicializar Firebase si hay credenciales
if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
  const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  });
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email } = req.body;

    if (!name || !email || !email.includes('@')) {
      return res.status(400).json({ error: 'Nombre y email válidos requeridos' });
    }

    try {
      const data = {
        name,
        email,
        timestamp: new Date().toISOString()
      };

      if (admin.apps.length > 0) {
        // Usar Firestore en producción
        const db = admin.firestore();
        await db.collection('subscribers').add(data);
      } else {
        // Usar db.json en desarrollo local
        const filePath = path.resolve('./db.json');
        const fileData = fs.readFileSync(filePath, 'utf8');
        const db = JSON.parse(fileData);
        db.emails.push(data);
        fs.writeFileSync(filePath, JSON.stringify(db, null, 2));
      }

      return res.status(200).json({ message: 'Datos guardados correctamente' });
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
