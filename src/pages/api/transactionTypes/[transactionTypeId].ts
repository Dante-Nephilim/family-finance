import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleTransactionType, editTransactionType, removeTransactionType } from '@/server/controllers/TransactionTypeController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleTransactionType(req, res);
      break;
    case 'PUT':
      await editTransactionType(req, res);
      break;
    case 'DELETE':
      await removeTransactionType(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
