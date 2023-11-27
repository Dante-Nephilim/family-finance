import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { TransactionType } from "@prisma/client";

const TransactionTypeList: React.FC = () => {
  const { data } = useDataContext();
  const { transactionTypes } = data;

  return (
    <div>
      <h1>TransactionTypes</h1>

      {transactionTypes.map((type: TransactionType) => (
        <div key={type.id}>
          {type.id} {type.type}
        </div>
      ))}
    </div>
  );
};

export default TransactionTypeList;
