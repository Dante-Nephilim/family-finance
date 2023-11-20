import { PrismaClient,TransactionType } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTransactionTypes = async (): Promise<TransactionType[]> => {
  return await prisma.transactionType.findMany();
};

export const createTransactionType = async (data: TransactionType): Promise<TransactionType> => {
  return await prisma.transactionType.create({
    data,
  });
};

export const updateTransactionType = async(transactionTypeId:number, data:TransactionType) =>{
  return await prisma.transactionType.update({where:{id: transactionTypeId}, data});
}

export const  deleteTransactionType = async(transactionTypeId:number) => {
  return await prisma.transactionType.delete({ where: { id: transactionTypeId } });
}

export const getTransactionTypeById = async(transactionTypeId:number) => {
  return await prisma.transactionType.findUnique({
    where:{id: transactionTypeId}
    })
};

