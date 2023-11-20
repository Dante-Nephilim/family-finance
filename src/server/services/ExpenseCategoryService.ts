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

export const updateExpenseCategory = async (expenseCategoryId: number, data: ExpenseCategory): Promise<ExpenseCategory> => {
  return await prisma.expenseCategory.update({
     where: { id:expenseCategoryId },
     data,
  });
 };
 
 export const deleteExpenseCategory = async (expenseCategoryId: number): Promise<ExpenseCategory> => {
  return await prisma.expenseCategory.delete({
     where: { id:expenseCategoryId },
  });
 };

 export const getExpenseCategoryById = async(expenseCategoryId:number): Promise<ExpenseCategory | null>=>{
  return await prisma.expenseCategory.findUnique({
    where:{id: expenseCategoryId}
    })
 };

