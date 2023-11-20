import { NextApiRequest, NextApiResponse } from 'next';
import {
  getAllTransactions,
  createTransaction,
  updateTransaction,
  deleteTransaction,
  getTransactionById
} from '../services/TransactionService';

// Get all transactions
export const listTransactions = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const transactions = await getAllTransactions();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve transactions" });
  }
};

// Create a transaction
export const addTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const transaction = await createTransaction(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to create transaction" });
  }
};

// Update a transaction
export const editTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
  const { transactionId } = req.query;
  try {
    const transaction = await updateTransaction(parseInt(transactionId as string), req.body);
    res.status(200).json(transaction);
  } catch (error) {
    res.status(500).json({ error: "Failed to update transaction" });
  }
};

// Delete a transaction
export const removeTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
  const { transactionId } = req.query;
  try {
    await deleteTransaction(parseInt(transactionId as string));
    res.status(200).json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete transaction" });
  }
};

// Get a transaction by ID
export const getSingleTransaction = async (req: NextApiRequest, res: NextApiResponse) => {
  const { transactionId } = req.query;
  try {
    const transaction = await getTransactionById(parseInt(transactionId as string));
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: "Transaction not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve transaction" });
  }
};
