import { NextApiRequest, NextApiResponse } from 'next';
import { listTransactionTypes, addTransactionType } from '@/server/controllers/TransactionTypeController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listTransactionTypes(req, res);
      break;
    case 'POST':
      await addTransactionType(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
