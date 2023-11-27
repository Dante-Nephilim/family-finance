// pages/index.tsx
import { GetServerSideProps } from "next";
import { fetchBudgetCategories } from "@/serverFunctions/fetchBudgetCategories";
import { BudgetCategory } from "@prisma/client";
import { DataProvider } from "@/context/DataContext";
import BudgetCategoryList from "@/components/budgetCategories/BudgetCategoryList/BudgetCategoryList";
import { fetchBudgets } from "@/serverFunctions/fetchBudgets";
import { fetchIncomeCategories } from "@/serverFunctions/fetchIncomeCategories";
import { fetchIncomes } from "@/serverFunctions/fetchIncomes";
import { fetchExpenses } from "@/serverFunctions/fetchExpenses";
import { fetchExpenseCategories } from "@/serverFunctions/fetchexpenseCategories";
import { fetchTransactions } from "@/serverFunctions/fetchTransactions";
import { fetchTransactionTypes } from "@/serverFunctions/fetchTransactionTypes";

interface HomeProps {
  initialData: {
    budgetCategories: BudgetCategory[];
  };
}

const Home: React.FC<HomeProps> = ({ initialData }) => {
  return (
    <DataProvider initialData={initialData}>
      <BudgetCategoryList />
    </DataProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const budgetCategories = await fetchBudgetCategories();
  const budgets = await fetchBudgets();
  const incomeCategories = await fetchIncomeCategories();
  const incomes = await fetchIncomes();
  const expenses = await fetchExpenses();
  const expenseCategories = await fetchExpenseCategories();
  const transactions = await fetchTransactions();
  const transactionTypes = await fetchTransactionTypes();
  return {
    props: {
      initialData: {
        budgetCategories,
        budgets,
        incomeCategories,
        incomes,
        expenses,
        expenseCategories,
        transactionTypes,
        transactions,
      },
    },
  };
};

export default Home;
