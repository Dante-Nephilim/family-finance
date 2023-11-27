import { NextApiRequest, NextApiResponse } from 'next';
import { listIncomeCategories, addIncomeCategory } from '@/server/controllers/IncomeCategoryController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listIncomeCategories(req, res);
      break;
    case 'POST':
      await addIncomeCategory(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
