import { PrismaClient,Expense } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllExpenses = async (): Promise<Expense[]> => {
  return await prisma.expense.findMany(
    {
      include:{expenseCategory:true , transactions:true}
    }
  );
};

export const createExpense = async (data: Expense): Promise<Expense> => {
  return await prisma.expense.create({
    data,
    include:{expenseCategory:true , transactions:true}

  });
};

export const updateExpense = async (expenseId: number, data: Expense): Promise<Expense> => {
  return await prisma.expense.update({
     where: { id:expenseId },
     include:{expenseCategory:true , transactions:true},
     data,
  });
 };
 
 export const deleteExpense = async (expenseId: number): Promise<Expense> => {
  return await prisma.expense.delete({
     where: { id:expenseId },
     include:{expenseCategory:true , transactions:true}
  });
 };

 export const getExpenseById = async(expenseId:number):Promise<Expense | null> =>{
  return await prisma.expense.findUnique({
    where:{id:expenseId},
    include:{expenseCategory:true , transactions:true}
  })
 };


