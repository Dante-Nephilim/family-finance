import { NextApiRequest, NextApiResponse } from 'next';
import { listBudgetCategories, addBudgetCategory } from '@/server/controllers/BudgetCategoryController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listBudgetCategories(req, res);
      break;
    case 'POST':
      await addBudgetCategory(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
