import React from 'react'
import { connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditExpensePage = (props) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const onSubmit = (expense) => {
    props.startEditExpense(id, expense)
    navigate('/')
  }
  const onRemove = () => {
    props.startRemoveExpense({ id })
    navigate('/')
  }

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm 
          expense={props.expenses.find(expense => expense.id === id)}
          onSubmit={onSubmit}
        />
        <button className="button button--secondary" onClick={onRemove}>Remove Expense</button>        
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expenses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)