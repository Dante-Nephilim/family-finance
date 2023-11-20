import { PrismaClient,Income } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllIncomes = async (): Promise<Income[]> => {
  return await prisma.income.findMany();
};

export const createIncome = async (data: Income): Promise<Income> => {
  return await prisma.income.create({
    data,
  });
};

export const updateIncome = async(incomeId:number,data:Income):Promise<Income> =>{
  return await prisma.income.update({
    where:{id: incomeId},
    data,
    })
};

export const deleteIncome = async(incomeId:number):Promise<Income> =>{
  return await prisma.income.delete({
    where:{id: incomeId}
    })
};

export const getIncomeById = async(incomeId:number):Promise<Income | null> =>{
  return await prisma.income.findUnique({
    where:{id: incomeId}
  })
};

