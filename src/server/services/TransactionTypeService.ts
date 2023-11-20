// server/services/TransactionTypeService.ts
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

// Add additional methods (update, delete) as needed
