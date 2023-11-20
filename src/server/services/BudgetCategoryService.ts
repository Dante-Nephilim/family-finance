// server/services/BudgetCategoryService.ts
import { PrismaClient,BudgetCategory } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBudgetCategories = async (): Promise<BudgetCategory[]> => {
  return await prisma.budgetCategory.findMany();
};

export const createBudgetCategory = async (data: BudgetCategory): Promise<BudgetCategory> => {
  return await prisma.budgetCategory.create({
    data,
  });
};

// Add additional methods (update, delete) as needed
