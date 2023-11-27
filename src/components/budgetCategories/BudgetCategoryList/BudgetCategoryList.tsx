// src/components/BudgetCategoryList.tsx
import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { BudgetCategory } from "@prisma/client";

const BudgetCategoryList: React.FC = () => {
  const { data } = useDataContext();
  const { budgetCategories } = data; // Replace with appropriate types

  return (
    <div>
      {budgetCategories.map((category: BudgetCategory) => (
        <div key={category.id}>
          {category.id} {category.name}
        </div>
      ))}
    </div>
  );
};

export default BudgetCategoryList;
