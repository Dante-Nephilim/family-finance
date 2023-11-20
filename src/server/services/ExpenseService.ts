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

export const updateExpense = async (expenseId: number, data: Expense): Promise<Expense> => {
  return await prisma.expense.update({
     where: { id:expenseId },
     data,
  });
 };
 
 export const deleteExpense = async (expenseId: number): Promise<Expense> => {
  return await prisma.expense.delete({
     where: { id:expenseId },
  });
 };

 export const getExpenseById = async(expenseId:number):Promise<Expense | null> =>{
  return await prisma.expense.findUnique({
    where:{id:expenseId}
  })
 };


