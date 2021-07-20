import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses: React.FC = () => {

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

  const income: string = amounts
    .filter((item:number) => item > 0)
    .reduce((acc:number, item:number) => (acc += item), 0)
    .toFixed(2);

  const expense: string = (
    amounts
      .filter((item: number) => item < 0)
      .reduce((acc: number, item: number) => (acc += item), 0) * -1
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>+{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-{expense}</p>
      </div>
    </div>
  );
};
