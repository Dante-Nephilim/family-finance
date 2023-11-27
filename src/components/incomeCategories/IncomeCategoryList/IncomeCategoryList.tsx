import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { IncomeCategory } from "@prisma/client";

const IncomeCategoryList: React.FC = () => {
  const { data } = useDataContext();
  const { incomeCategories } = data;

  return (
    <div>
      <h1>IncomeCategories</h1>

      {incomeCategories.map((category: IncomeCategory) => (
        <div key={category.id}>
          {category.id} {category.name}
        </div>
      ))}
    </div>
  );
};

export default IncomeCategoryList;
