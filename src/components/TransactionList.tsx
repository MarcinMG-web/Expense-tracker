import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList: React.FC = () => {
  
  interface ITransactions {
    id: number;
    text: string;
    amount: number;
  }

  const { transactions: ITransactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {ITransactions.map(
          (transaction: { id: number; text: string; amount: number }) => (
            <Transaction key={transaction.id} transaction={transaction} />
          )
        )}
      </ul>
    </>
  );
};
