import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleBudget, editBudget, removeBudget } from '@/server/controllers/BudgetController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleBudget(req, res);
      break;
    case 'PUT':
      await editBudget(req, res);
      break;
    case 'DELETE':
      await removeBudget(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
