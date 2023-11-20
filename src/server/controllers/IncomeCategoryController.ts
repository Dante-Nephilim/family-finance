import { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllIncomeCategories,
  createIncomeCategory,
  updateIncomeCategory,
  deleteIncomeCategory,
  getIncomeCategoryById
} from '../services/IncomeCategoryService';

// Get all incomeCategories
export const listIncomeCategories = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const incomeCategories = await getAllIncomeCategories();
    res.status(200).json(incomeCategories);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve incomeCategories" });
  }
};

// Create a incomeCategory
export const addIncomeCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const incomeCategory = await createIncomeCategory(req.body);
    res.status(201).json(incomeCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to create incomeCategory" });
  }
};

// Update a incomeCategory
export const editIncomeCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { incomeCategoryId } = req.query;
  try {
    const incomeCategory = await updateIncomeCategory(parseInt(incomeCategoryId as string), req.body);
    res.status(200).json(incomeCategory);
  } catch (error) {
    res.status(500).json({ error: "Failed to update incomeCategory" });
  }
};

// Delete a incomeCategory
export const removeIncomeCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { incomeCategoryId } = req.query;
  try {
    await deleteIncomeCategory(parseInt(incomeCategoryId as string));
    res.status(200).json({ message: "IncomeCategory deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete incomeCategory" });
  }
};

// Get a incomeCategory by ID
export const getSingleIncomeCategory = async (req: NextApiRequest, res: NextApiResponse) => {
  const { incomeCategoryId } = req.query;
  try {
    const incomeCategory = await getIncomeCategoryById(parseInt(incomeCategoryId as string));
    if (incomeCategory) {
      res.status(200).json(incomeCategory);
    } else {
      res.status(404).json({ message: "IncomeCategory not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve incomeCategory" });
  }
};
