import { NextApiRequest, NextApiResponse } from 'next';
import { listTransactions, addTransaction } from '@/server/controllers/TransactionController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listTransactions(req, res);
      break;
    case 'POST':
      await addTransaction(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
