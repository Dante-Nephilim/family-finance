import { PrismaClient,Budget } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllBudgets = async (): Promise<Budget[]> => {
  return await prisma.budget.findMany({
    include:{budgetCategory:true , transactions:true}
  });
};

export const createBudget = async (data: Budget): Promise<Budget> => {
  return await prisma.budget.create({
    data,
    include:{
      budgetCategory: true,
      transactions: true
    }
  });
};

export const deleteBudget = async (budgetId:number):Promise<Budget> => {
  return await prisma.budget.delete({
    where:{
      id:budgetId,
    },
    include:{
      budgetCategory: true,
      transactions: true,
    }
  })
}

export const updateBudget = async(budgetId:number,data:Budget):Promise<Budget> => {
  return await prisma.budget.update({
    data:data,
    where:{
      id:budgetId
    },
    include:{
      budgetCategory:true,
      transactions:true,
    }
  })
}

export const getBudgetById = async(budgetId:number):Promise<Budget | null> =>{
  return await prisma.budget.findUnique({
    where:{id:budgetId},
    include:{budgetCategory:true , transactions:true}
    })
};

