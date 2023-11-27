import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { Expense } from "@prisma/client";

const ExpenseList: React.FC = () => {
  const { data } = useDataContext();
  const { expenses } = data;

  return (
    <div>
      <h1>Expenses</h1>

      {expenses.map((expense: Expense) => (
        <div key={expense.id}>
          {expense.id} {expense.amount} {expense.categoryId}
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
