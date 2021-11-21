import React from 'react'
import { connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditExpensePage = (props) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const onSubmit = (expense) => {
    props.editExpense(id, expense)
    navigate('/')
  }
  const onRemove = () => {
    props.removeExpense({ id })
    navigate('/')
  }

  return (
    <div>
      <ExpenseForm 
        expense={props.expenses.find(expense => expense.id === id)}
        onSubmit={onSubmit}
      />
      <button onClick={onRemove}>Remove</button>  
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
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: ({ id }) => dispatch(removeExpense({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)