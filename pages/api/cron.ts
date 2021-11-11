import { NextApiRequest, NextApiResponse } from 'next';
import { ContratoService } from '../../src/Services/contrato.service';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers;

      if (authorization === `Bearer ${process.env.API_SECRET}`) {
        const itemsGuardados = await ContratoService.guardarContratosHoy();
        res.status(200).json({ itemsGuardados });
      } else {
        res.status(401).json({ statusCode: 401, message: 'No autorizado.' });
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: JSON.stringify(err) });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Metodo no permitido');
  }
}
