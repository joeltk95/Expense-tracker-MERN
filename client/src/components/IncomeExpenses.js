import React, { useContext } from 'react';
//Pull global state
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpenses = () => {
  //de-structure instead of using context.transactions
  const { transactions } = useContext(GlobalContext);

  //Take transaction amounts and put in array
  const amounts = transactions.map((transaction) => transaction.amount);

  //If more than 0, add together and put to 2 decimal
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  //If less than 0, add together and put to 2 decimal
  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div>
      <div className='inc-exp-container'>
        <div>
          <h4>Income</h4>
          <p className='money plus'>${numberWithCommas(income)}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className='money minus'>${numberWithCommas(expense)}</p>
        </div>
      </div>
    </div>
  );
};
