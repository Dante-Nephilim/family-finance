import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleExpense, editExpense, removeExpense } from '@/server/controllers/ExpenseController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleExpense(req, res);
      break;
    case 'PUT':
      await editExpense(req, res);
      break;
    case 'DELETE':
      await removeExpense(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
