import axios from 'axios';
import { TransactionType } from '@prisma/client';

export const fetchTransactionTypes = async (): Promise<TransactionType[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<TransactionType[]>(`${apiUrl}/api/transactionTypes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Transaction Types:', error);
    throw new Error('Failed to fetch Transaction Types');
  }
};
