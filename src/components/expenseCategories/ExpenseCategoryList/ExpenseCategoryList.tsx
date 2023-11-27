import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { ExpenseCategory } from "@prisma/client";

const ExpenseCategoryList: React.FC = () => {
  const { data } = useDataContext();
  const { expenseCategories } = data;

  return (
    <div>
      <h1>ExpenseCategories</h1>
      {expenseCategories.map((category: ExpenseCategory) => (
        <div key={category.id}>
          {category.id} {category.name}
        </div>
      ))}
    </div>
  );
};

export default ExpenseCategoryList;
