import React from 'react'
import { connect } from "react-redux";
import { useNavigate  } from 'react-router-dom';
import { startAddExpense } from '../actions/expenses'
import ExpenseForm from './ExpenseForm'

export const AddExpensePage = (props) => {
  let navigate = useNavigate();
  const onSubmit = (expense) => {
    props.startAddExpense(expense)
    navigate('/')
  }

  return (
    <div>
      <h1>Add Expense </h1>
      <ExpenseForm 
        onSubmit={onSubmit}
      />
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)