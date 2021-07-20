import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance: React.FC = () => {
  const { transactions } = useContext(GlobalContext) ;

  const amounts:number[] = transactions.map(
    (transaction: { id: number; text: string; amount: number }) =>
      transaction.amount
  );

  const total:string = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
