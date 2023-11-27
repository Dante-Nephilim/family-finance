import axios from 'axios';
import { Expense } from '@prisma/client';

export const fetchExpenses = async (): Promise<Expense[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<Expense[]>(`${apiUrl}/api/expenses`);
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw new Error('Failed to fetch expenses');
  }
};
