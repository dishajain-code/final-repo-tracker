

import React from 'react';
import './Transaction.css'; // Import CSS file

export default function Transaction({ transaction, deleteTransaction }) {
  const sign = transaction.amount >= 0 ? "+" : "-";

  return (
    <li className={transaction.amount >= 0 ? "plus" : "minus"}>
      <span className="transaction-text">{transaction.text}</span>
      <span className="transaction-amount">
        <span style={{marginRight: 8}}> 
          {transaction.date}
        </span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button className='delete-btn' 
      onClick={() => deleteTransaction(transaction.id)}
      >
      X

      </button>
     
    </li>
  );
}

