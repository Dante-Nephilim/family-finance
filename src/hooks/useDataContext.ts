import { useContext } from 'react';
import { DataContext, DataContextType } from '@/context/DataContext';

export const useDataContext = (): DataContextType => {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error('useDataContext must be used within a DataProvider');
  }

  return context;
};
