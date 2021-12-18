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
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm 
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
})

export default connect(undefined, mapDispatchToProps)(AddExpensePage)