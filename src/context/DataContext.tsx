import React, { createContext, useState, ReactNode } from "react";

export interface DataContextType {
  data: any;
  updateData: (newData: any) => void;
}

interface DataProviderProps {
  children: ReactNode;
  initialData: any;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children, initialData }: DataProviderProps) => {
  const [data, setData] = useState(initialData);

  const updateData = (newData: any) => {
    setData({ ...data, ...newData });
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};
