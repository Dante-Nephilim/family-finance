import axios from 'axios';
import { Budget } from '@prisma/client';

export const fetchBudgets = async (): Promise<Budget[]> => {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    const response = await axios.get<Budget[]>(`${apiUrl}/api/budgets`);
    return response.data;
  } catch (error) {
    console.error('Error fetching budgets:', error);
    throw new Error('Failed to fetch budgets');
  }
};
