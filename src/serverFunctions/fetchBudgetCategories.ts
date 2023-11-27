import axios from 'axios';
import { BudgetCategory } from '@prisma/client';

export const fetchBudgetCategories = async (): Promise<BudgetCategory[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<BudgetCategory[]>(`${apiUrl}/api/budgetCategories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching budget categories:', error);
    throw new Error('Failed to fetch budget categories');
  }
};
