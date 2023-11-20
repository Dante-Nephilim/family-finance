import { NextApiRequest, NextApiResponse } from 'next';
import { listIncomes, addIncome } from '@/server/controllers/IncomeController';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      await listIncomes(req, res);
      break;
    case 'POST':
      await addIncome(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
