// server/services/ExpenseService.ts
import { PrismaClient,Expense } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllExpenses = async (): Promise<Expense[]> => {
  return await prisma.expense.findMany();
};

export const createExpense = async (data: Expense): Promise<Expense> => {
  return await prisma.expense.create({
    data,
  });
};

// Add additional methods (update, delete) as needed
