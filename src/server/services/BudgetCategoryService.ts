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

export const updateBudgetCategory = async (budgetCategoryId: number, data: BudgetCategory): Promise<BudgetCategory> =>{
  return await prisma.budgetCategory.update({
    where:{id:budgetCategoryId},
    data,
  })
};

export const deleteBudgetCategory = async(budgetCategoryId:number):Promise<BudgetCategory> => {
  return await prisma.budgetCategory.delete({where:{id:budgetCategoryId}});
};

export const getBudgetCategoryById = async(budgetId:number):Promise<BudgetCategory | null> => {
  return await prisma.budgetCategory.findUnique({where:{id:budgetId}})
};

