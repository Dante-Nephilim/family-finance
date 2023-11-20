import { NextApiRequest, NextApiResponse } from 'next';
import{createExpense,deleteExpense,getAllExpenses,getExpenseById,updateExpense} from '../services/ExpenseService'

// Get all expenses
export const listExpenses = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const expenses = await getAllExpenses();
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve expenses" });
    }
  };
  
  // Create a expense
  export const addExpense = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      const expense = await createExpense(req.body);
      res.status(201).json(expense);
    } catch (error) {
      res.status(500).json({ error: "Failed to create expense" });
    }
  };
  
  // Update a expense
  export const editExpense = async (req: NextApiRequest, res: NextApiResponse) => {
    const { transactionId } = req.query;
    try {
      const expense = await updateExpense(parseInt(transactionId as string), req.body);
      res.status(200).json(expense);
    } catch (error) {
      res.status(500).json({ error: "Failed to update expense" });
    }
  };
  
  // Delete a expense
  export const removeExpense = async (req: NextApiRequest, res: NextApiResponse) => {
    const { transactionId } = req.query;
    try {
      await deleteExpense(parseInt(transactionId as string));
      res.status(200).json({ message: "Expense deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete expense" });
    }
  };
  
  // Get a expense by ID
  export const getSingleExpense = async (req: NextApiRequest, res: NextApiResponse) => {
    const { transactionId } = req.query;
    try {
      const expense = await getExpenseById(parseInt(transactionId as string));
      if (expense) {
        res.status(200).json(expense);
      } else {
        res.status(404).json({ message: "Expense not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve expense" });
    }
  };
  