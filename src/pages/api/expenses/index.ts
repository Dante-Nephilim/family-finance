import { NextApiRequest, NextApiResponse } from 'next';
import { listExpenses, addExpense } from '@/server/controllers/ExpenseController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listExpenses(req, res);
      break;
    case 'POST':
      await addExpense(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
