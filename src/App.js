import React from 'react';
import {Header} from './componets/Header'
import {Balance} from './componets/Balance'
import {IncomeExpenses} from './componets/IncomeExpenses'
import {TransactionList} from './componets/TransactionList'
import {AddTransaction} from './componets/AddTransaction'

import { GlobalProvider } from './context/GlobalState'

import './App.css';


function App() {
  return (
    <GlobalProvider>

      <Header />

      <div className="container">
        <Balance></Balance>

        <IncomeExpenses></IncomeExpenses>

        <TransactionList></TransactionList>

        <AddTransaction></AddTransaction>
      </div>
    
      </GlobalProvider>
  );
}

export default App;
