import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '@/lib/mysqlDB';
import { RowDataPacket } from 'mysql2';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      const [rows]: [RowDataPacket[], unknown] = await connection.query(
        'SELECT * FROM Users WHERE Email = ? AND Password = ?',
        [email, password]
      );

      if (rows.length > 0) {
        const user = rows[0];
        res.status(200).json({
          success: true,
          user: {
            id: user.ID,
            firstName: user.FirstName,
            lastName: user.LastName,
            email: user.Email,
            adresse: user.Adress,
          },
        });
      } else {
        res.status(401).json({ success: false, message: 'Identifiants incorrects' });
      }
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      res.status(500).json({ success: false, message: 'Erreur serveur' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Méthode ${req.method} non autorisée` });
  }
}
