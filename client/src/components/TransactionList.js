//Pull from global context using useContext
import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';

//Pull global state
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  //de-structure instead of using context.transactions
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
