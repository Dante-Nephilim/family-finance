// server/services/IncomeCategoryService.ts
import { PrismaClient,IncomeCategory } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllIncomeCategories = async (): Promise<IncomeCategory[]> => {
  return await prisma.incomeCategory.findMany();
};

export const createIncomeCategory = async (data: IncomeCategory): Promise<IncomeCategory> => {
  return await prisma.incomeCategory.create({
    data,
  });
};

// Add additional methods (update, delete) as needed
