import axios from 'axios';
import { ExpenseCategory } from '@prisma/client';

export const fetchExpenseCategories = async (): Promise<ExpenseCategory[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<ExpenseCategory[]>(`${apiUrl}/api/expenseCategories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching expense categories:', error);
    throw new Error('Failed to fetch expense categories');
  }
};
