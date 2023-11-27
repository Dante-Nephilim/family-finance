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
  try {
    const [
      budgetCategories,
      budgets,
      incomeCategories,
      incomes,
      expenses,
      expenseCategories,
      transactions,
      transactionTypes,
    ] = await Promise.all([
      fetchBudgetCategories(),
      fetchBudgets(),
      fetchIncomeCategories(),
      fetchIncomes(),
      fetchExpenses(),
      fetchExpenseCategories(),
      fetchTransactions(),
      fetchTransactionTypes(),
    ]);

    return {
      props: {
        initialData: {
          budgetCategories,
          budgets,
          incomeCategories,
          incomes,
          expenses,
          expenseCategories,
          transactions,
          transactionTypes,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        initialData: {
          budgetCategories: [],
          budgets: [],
          incomeCategories: [],
          incomes: [],
          expenses: [],
          expenseCategories: [],
          transactions: [],
          transactionTypes: [],
        },
      },
    };
  }
};

export default Home;
