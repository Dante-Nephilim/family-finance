import { NextApiRequest, NextApiResponse } from 'next';
import { getSingleIncome, editIncome, removeIncome } from '@/server/controllers/IncomeController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await getSingleIncome(req, res);
      break;
    case 'PUT':
      await editIncome(req, res);
      break;
    case 'DELETE':
      await removeIncome(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
