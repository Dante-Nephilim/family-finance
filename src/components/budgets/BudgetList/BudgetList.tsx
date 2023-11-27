import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { Budget } from "@prisma/client";

const BudgetList: React.FC = () => {
  const { data } = useDataContext();
  const { budgets } = data;

  return (
    <div>
      <h1>Budgets</h1>
      {budgets.map((budget: Budget) => (
        <div key={budget.id}>
          {budget.id} {budget.totalAmount} {budget.allocatedAmount}{" "}
          {budget.totalAmount} {budget.categoryId}
        </div>
      ))}
    </div>
  );
};

export default BudgetList;
