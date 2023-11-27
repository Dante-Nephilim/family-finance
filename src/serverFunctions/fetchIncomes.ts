import axios from 'axios';
import { Income } from '@prisma/client';

export const fetchIncomes = async (): Promise<Income[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<Income[]>(`${apiUrl}/api/incomes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching incomes:', error);
    throw new Error('Failed to fetch incomes');
  }
};
