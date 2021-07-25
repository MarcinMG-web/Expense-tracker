import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';


export const Balance: React.FC = () => {

  interface ITransactions {
    id: number;
    text: string;
    amount: number;
  }
  
  const { transactions: ITransactions } = useContext(GlobalContext);

  const amounts: number[] = ITransactions.map(
    (transaction: { id: number; text: string; amount: number }) =>
      transaction.amount
  );


  const total: string = amounts
    .reduce((acc: number, item:number) => (acc += item), 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
