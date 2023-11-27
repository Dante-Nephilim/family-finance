import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleIncomeCategory, editIncomeCategory, removeIncomeCategory } from '@/server/controllers/IncomeCategoryController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleIncomeCategory(req, res);
      break;
    case 'PUT':
      await editIncomeCategory(req, res);
      break;
    case 'DELETE':
      await removeIncomeCategory(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
