


import React from "react";

export default function Balance({ transactions }) {
  // Calculate the total balance
  
  const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

  return (
    <div>
      <h4>Balance</h4>
      <h1>${total}</h1> {/* This will display 55 */}
    </div>
  );
}

