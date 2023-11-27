import React from "react";
import { useDataContext } from "@/hooks/useDataContext";
import { Transaction } from "@prisma/client";

const TransactionList: React.FC = () => {
  const { data } = useDataContext();
  const { transactions } = data;

  return (
    <div>
      <h1>Transactions</h1>

      {transactions.map((transaction: Transaction) => (
        <div key={transaction.id}>
          {transaction.id} {transaction.budgetId} {transaction.typeId} {transaction?.incomeId} {transaction?.expenseId}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
