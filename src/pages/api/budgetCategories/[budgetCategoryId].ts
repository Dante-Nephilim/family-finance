import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleBudgetCategory, editBudgetCategory, removeBudgetCategory } from '@/server/controllers/BudgetCategoryController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleBudgetCategory(req, res);
      break;
    case 'PUT':
      await editBudgetCategory(req, res);
      break;
    case 'DELETE':
      await removeBudgetCategory(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
