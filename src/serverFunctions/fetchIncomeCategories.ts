import axios from 'axios';
import { IncomeCategory } from '@prisma/client';

export const fetchIncomeCategories = async (): Promise<IncomeCategory[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<IncomeCategory[]>(`${apiUrl}/api/incomeCategories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching income categories:', error);
    throw new Error('Failed to fetch income categories');
  }
};
