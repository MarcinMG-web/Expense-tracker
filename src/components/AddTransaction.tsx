import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction: React.FC = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction }: any = useContext(GlobalContext);

  const onSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const newTransaction: {
      id: number;
      text: string;
      amount: number;
    } = {
      id: Date.now(),
      text: text,
      amount: +amount,
    };
    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (-) negative - expense, (+) positive - income
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            placeholder='Enter amount...'
          />
        </div>
        <button className='btn'>Add transaction</button>
      </form>
    </>
  );
};
