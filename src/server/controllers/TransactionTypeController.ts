import { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllTransactionTypes,
  createTransactionType,
  updateTransactionType,
  deleteTransactionType,
  getTransactionTypeById
} from '../services/TransactionTypeService';

// Get all transactionTypes
export const listTransactionTypes = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const transactionTypes = await getAllTransactionTypes();
    res.status(200).json(transactionTypes);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve transactionTypes" });
  }
};

// Create a transactionType
export const addTransactionType = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const transactionType = await createTransactionType(req.body);
    res.status(201).json(transactionType);
  } catch (error) {
    res.status(500).json({ error: "Failed to create transactionType" });
  }
};

// Update a transactionType
export const editTransactionType = async (req: NextApiRequest, res: NextApiResponse) => {
  const { transactionTypeId } = req.query;
  try {
    const transactionType = await updateTransactionType(parseInt(transactionTypeId as string), req.body);
    res.status(200).json(transactionType);
  } catch (error) {
    res.status(500).json({ error: "Failed to update transactionType" });
  }
};

// Delete a transactionType
export const removeTransactionType = async (req: NextApiRequest, res: NextApiResponse) => {
  const { transactionTypeId } = req.query;
  try {
    await deleteTransactionType(parseInt(transactionTypeId as string));
    res.status(200).json({ message: "TransactionType deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete transactionType" });
  }
};

// Get a transactionType by ID
export const getSingleTransactionType = async (req: NextApiRequest, res: NextApiResponse) => {
  const { transactionTypeId } = req.query;
  try {
    const transactionType = await getTransactionTypeById(parseInt(transactionTypeId as string));
    if (transactionType) {
      res.status(200).json(transactionType);
    } else {
      res.status(404).json({ message: "TransactionType not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve transactionType" });
  }
};
