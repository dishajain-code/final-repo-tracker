


import React, { Component } from 'react';
import { connect } from 'react-redux';
import Balance from '../components/Balance';
import AddTransactions from '../components/AddTransactions';
import { AddTransaction, deleteTransaction } from '../redux/action';
import TransactionsList from '../components/TransactionsList';
import IncomeExpense from '../components/IncomeExpense';

class Main extends Component {
  render() {
    const { transactions, AddTransaction, deleteTransaction } = this.props

    return (
      <div className="container">
        <Balance transactions={transactions} />
        <IncomeExpense transactions = {transactions}/>
        <TransactionsList transactions={transactions} deleteTransaction={deleteTransaction} />

        <AddTransactions 
         AddTransaction ={(transaction) =>  AddTransaction(transaction)} 
        id={transactions[0] ? transactions[0].id + 1 : 1}/>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  transactions: state.transactions 
})
const mapDispatchToProps = (dispatch) => ({
 AddTransaction: (transaction) => dispatch(AddTransaction(transaction)),
 deleteTransaction: (id) => dispatch(deleteTransaction(id))
})

export default connect(mapStateToProps , mapDispatchToProps)(Main);

