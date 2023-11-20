import { NextApiRequest, NextApiResponse } from 'next';
import { listBudgets, addBudget } from '@/server/controllers/BudgetController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listBudgets(req, res);
      break;
    case 'POST':
      await addBudget(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
