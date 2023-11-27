import axios from 'axios';
import { Transaction } from '@prisma/client';

export const fetchTransactions = async (): Promise<Transaction[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<Transaction[]>(`${apiUrl}/api/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw new Error('Failed to fetch transactions');
  }
};
