// server/services/TransactionService.ts
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

// Add additional methods (update, delete) as needed
