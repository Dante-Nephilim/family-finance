import { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllExpenseCategories,
  createExpenseCategory,
  updateExpenseCategory,
  deleteExpenseCategory,
  getExpenseCategoryById
} from '../services/ExpenseCategoryService';

// Get all expenseCategories
export const listExpenseCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const expenseCategories = await getAllExpenseCategories();
    res.status(200).json(expenseCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve expenseCategories" });
  }
};

// Create a expenseCategory
export const addExpenseCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const expenseCategory = await createExpenseCategory(req.body);
    res.status(201).json(expenseCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create expenseCategory" });
  }
};

// Update a expenseCategory
export const editExpenseCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { expenseCategoryId } = req.query;
  try {
    const expenseCategory = await updateExpenseCategory(parseInt(expenseCategoryId as string), req.body);
    res.status(200).json(expenseCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to update expenseCategory" });
  }
};

// Delete a expenseCategory
export const removeExpenseCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { expenseCategoryId } = req.query;
  try {
    await deleteExpenseCategory(parseInt(expenseCategoryId as string));
    res.status(200).json({ message: "ExpenseCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete expenseCategory" });
  }
};

// Get a expenseCategory by ID
export const getSingleExpenseCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { expenseCategoryId } = req.query;
  try {
    const expenseCategory = await getExpenseCategoryById(parseInt(expenseCategoryId as string));
    if (expenseCategory) {
      res.status(200).json(expenseCategory);
    } else {
      res.status(404).json({ message: "ExpenseCategory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve expenseCategory" });
  }
};
