import { PrismaClient,Transaction } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTransactions = async (): Promise<Transaction[]> => {
  return await prisma.transaction.findMany();
};

export const createTransaction = async (data: Transaction): Promise<Transaction> => {
  return await prisma.transaction.create({
    data,
  });
};

export const updateTransaction = async(transactionId:number, data:Transaction):Promise<Transaction>=>{
  return await prisma.transaction.update({
    where:{id: transactionId},
    data,
    })
};

export const deleteTransaction = async(transactionId:number):Promise<Transaction> =>{
  return await prisma.transaction.delete({where:{id:transactionId}});
};

export const getTransactionById = async(transactionId:number): Promise<Transaction | null> =>{
  return await prisma.transaction.findUnique({where:{id:transactionId}})
};

