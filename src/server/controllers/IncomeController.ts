import { NextApiRequest, NextApiResponse } from 'next';
import {createIncome,deleteIncome,getAllIncomes,getIncomeById,updateIncome} from '../services/IncomeService';

// Get all incomes
export const listIncomes = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const incomes = await getAllIncomes();
      res.status(200).json(incomes);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve incomes" });
    }
  };
  
  // Create a income
  export const addIncome = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const income = await createIncome(req.body);
      res.status(201).json(income);
    } catch (error) {
      res.status(500).json({ error: "Failed to create income" });
    }
  };
  
  // Update a income
  export const editIncome = async (req: NextApiRequest, res: NextApiResponse) => {
    const { incomeId } = req.query;
    try {
      const income = await updateIncome(parseInt(incomeId as string), req.body);
      res.status(200).json(income);
    } catch (error) {
      res.status(500).json({ error: "Failed to update income" });
    }
  };
  
  // Delete a income
  export const removeIncome = async (req: NextApiRequest, res: NextApiResponse) => {
    const { incomeId } = req.query;
    try {
      await deleteIncome(parseInt(incomeId as string));
      res.status(200).json({ message: "Income deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete income" });
    }
  };
  
  // Get a income by ID
  export const getSingleIncome = async (req: NextApiRequest, res: NextApiResponse) => {
    const { incomeId } = req.query;
    try {
      const income = await getIncomeById(parseInt(incomeId as string));
      if (income) {
        res.status(200).json(income);
      } else {
        res.status(404).json({ message: "Income not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve income" });
    }
  };
  