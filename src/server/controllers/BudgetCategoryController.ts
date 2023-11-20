import { NextApiRequest, NextApiResponse } from 'next';
import {
    getAllBudgetCategories,
  createBudgetCategory,
  updateBudgetCategory,
  deleteBudgetCategory,
  getBudgetCategoryById
} from '../services/BudgetCategoryService';

// Get all budgetCategories
export const listBudgetCategorys = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const budgetCategories = await getAllBudgetCategories();
    res.status(200).json(budgetCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve budgetCategories" });
  }
};

// Create a budgetCategory
export const addBudgetCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const budgetCategory = await createBudgetCategory(req.body);
    res.status(201).json(budgetCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create budgetCategory" });
  }
};

// Update a budgetCategory
export const editBudgetCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { budgetCategoryId } = req.query;
  try {
    const budgetCategory = await updateBudgetCategory(parseInt(budgetCategoryId as string), req.body);
    res.status(200).json(budgetCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to update budgetCategory" });
  }
};

// Delete a budgetCategory
export const removeBudgetCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { budgetCategoryId } = req.query;
  try {
    await deleteBudgetCategory(parseInt(budgetCategoryId as string));
    res.status(200).json({ message: "BudgetCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete budgetCategory" });
  }
};

// Get a budgetCategory by ID
export const getSingleBudgetCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { budgetCategoryId } = req.query;
  try {
    const budgetCategory = await getBudgetCategoryById(parseInt(budgetCategoryId as string));
    if (budgetCategory) {
      res.status(200).json(budgetCategory);
    } else {
      res.status(404).json({ message: "BudgetCategory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve budgetCategory" });
  }
};
