import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export interface TransactionProps {
  transaction: { id: number; text: string; amount: number }
}

export const Transaction:React.FC<TransactionProps> = ({ transaction }) => {
  
  const { deleteTransaction }:any = useContext(GlobalContext);

  const sing:string = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text}{' '}
      <span>
        {sing}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className='delete-btn'
      >
        x
      </button>
    </li>
  );
};