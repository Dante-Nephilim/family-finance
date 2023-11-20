import { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
  getBudgetById
} from '../services/BudgetService';

// Get all budgets
export const listBudgets = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const budgets = await getAllBudgets();
    res.status(200).json(budgets);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve budgets" });
  }
};

// Create a budget
export const addBudget = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const budget = await createBudget(req.body);
    res.status(201).json(budget);
  } catch (error) {
    res.status(500).json({ error: "Failed to create budget" });
  }
};

// Update a budget
export const editBudget = async (req: NextApiRequest, res: NextApiResponse) => {
  const { budgetId } = req.query;
  try {
    const budget = await updateBudget(parseInt(budgetId as string), req.body);
    res.status(200).json(budget);
  } catch (error) {
    res.status(500).json({ error: "Failed to update budget" });
  }
};

// Delete a budget
export const removeBudget = async (req: NextApiRequest, res: NextApiResponse) => {
  const { budgetId } = req.query;
  try {
    await deleteBudget(parseInt(budgetId as string));
    res.status(200).json({ message: "Budget deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete budget" });
  }
};

// Get a budget by ID
export const getSingleBudget = async (req: NextApiRequest, res: NextApiResponse) => {
  const { budgetId } = req.query;
  try {
    const budget = await getBudgetById(parseInt(budgetId as string));
    if (budget) {
      res.status(200).json(budget);
    } else {
      res.status(404).json({ message: "Budget not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve budget" });
  }
};
