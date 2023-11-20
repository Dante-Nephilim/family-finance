// server/services/ExpenseCategoryService.ts
import { PrismaClient,ExpenseCategory } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllExpenseCategories = async (): Promise<ExpenseCategory[]> => {
  return await prisma.expenseCategory.findMany();
};

export const createExpenseCategory = async (data: ExpenseCategory): Promise<ExpenseCategory> => {
  return await prisma.expenseCategory.create({
    data,
  });
};

// Add additional methods (update, delete) as needed
