import { NextApiRequest, NextApiResponse } from 'next';
import { listExpenseCategories, addExpenseCategory } from '@/server/controllers/ExpenseCategoryController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listExpenseCategories(req, res);
      break;
    case 'POST':
      await addExpenseCategory(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
