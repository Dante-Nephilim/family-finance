// server/services/IncomeService.ts
import { PrismaClient,Income } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllIncomes = async (): Promise<Income[]> => {
  return await prisma.income.findMany();
};

export const createIncome = async (data: Income): Promise<Income> => {
  return await prisma.income.create({
    data,
  });
};

// Add additional methods (update, delete) as needed
