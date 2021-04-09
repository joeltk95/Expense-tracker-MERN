import React, { useContext } from 'react';
//Pull global state
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Balance = () => {
  //de-structure instead of using context.transactions
  const { transactions } = useContext(GlobalContext);

  //Take transaction amounts and put in array
  const amounts = transactions.map((transaction) => transaction.amount);

  //Add all together and put into 2 decimal
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </>
  );
};
