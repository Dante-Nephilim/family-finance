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
export const updateIncomeCategory = async (incomeCategoryId: number, data: IncomeCategory): Promise<IncomeCategory> =>{
  return await prisma.incomeCategory.update({
    where:{ id:incomeCategoryId },
    data,
    })
};

export const deleteIncomeCategory = async (incomeCategoryId: number): Promise<IncomeCategory> => {
  return await prisma.incomeCategory.delete({
     where: { id: incomeCategoryId },
  });
 };
 
 export const getIncomeCategoryById = async (incomeCategoryId: number): Promise<IncomeCategory | null> => {
  return await prisma.incomeCategory.findUnique({
     where: { id: incomeCategoryId },
  });
 };


// Add additional methods (update, delete) as needed
