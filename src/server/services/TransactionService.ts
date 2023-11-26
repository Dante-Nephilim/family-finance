import { PrismaClient,Transaction } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTransactions = async (): Promise<Transaction[]> => {
  return await prisma.transaction.findMany({
    include:{transactionType:true, budget:true, income:true,expense:true}
  });
};

export const createTransaction = async (data: Transaction): Promise<Transaction> => {
  return await prisma.transaction.create({
    data,
    include:{transactionType:true, budget:true, income:true,expense:true}

  });
};

export const updateTransaction = async(transactionId:number, data:Transaction):Promise<Transaction>=>{
  return await prisma.transaction.update({
    where:{id: transactionId},
    include:{transactionType:true, budget:true, income:true,expense:true},
    data,
    })
};

export const deleteTransaction = async(transactionId:number):Promise<Transaction> =>{
  return await prisma.transaction.delete({where:{id:transactionId}});
};

export const getTransactionById = async(transactionId:number): Promise<Transaction | null> =>{
  return await prisma.transaction.findUnique({
    where:{id:transactionId},
    include:{transactionType:true, budget:true, income:true,expense:true}
  })
};

