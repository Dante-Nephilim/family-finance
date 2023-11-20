import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleTransaction, editTransaction, removeTransaction } from '@/server/controllers/TransactionController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleTransaction(req, res);
      break;
    case 'PUT':
      await editTransaction(req, res);
      break;
    case 'DELETE':
      await removeTransaction(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
