import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { Income } from "@prisma/client";

const IncomeList: React.FC = () => {
  const { data } = useDataContext();
  const { incomes } = data;

  return (
    <div>
      <h1>Incomes</h1>

      {incomes.map((income: Income) => (
        <div key={income.id}>
          {income.id} {income.amount} {income.categoryId}
        </div>
      ))}
    </div>
  );
};

export default IncomeList;
