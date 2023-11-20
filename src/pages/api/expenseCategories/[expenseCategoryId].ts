import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleExpenseCategory, editExpenseCategory, removeExpenseCategory } from '@/server/controllers/ExpenseCategoryController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleExpenseCategory(req, res);
      break;
    case 'PUT':
      await editExpenseCategory(req, res);
      break;
    case 'DELETE':
      await removeExpenseCategory(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
