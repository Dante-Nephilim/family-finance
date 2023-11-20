// server/services/BudgetService.ts
import { PrismaClient,Budget } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBudgets = async (): Promise<Budget[]> => {
  return await prisma.budget.findMany();
};

export const createBudget = async (data: Budget): Promise<Budget> => {
  return await prisma.budget.create({
    data,
  });
};

export const deleteBudget = async (budgetId:number):Promise<Budget> => {
  return await prisma.budget.delete({
    where:{
      id:budgetId,
    },
  })
}

export const updateBudget = async(budgetId:number,data:Budget):Promise<Budget> => {
  return await prisma.budget.update({
    data:data,
    where:{
      id:budgetId
    }
  })
}

// Add additional methods (update, delete) as needed
