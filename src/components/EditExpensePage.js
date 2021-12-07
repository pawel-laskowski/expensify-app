import React from 'react'
import { connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { editExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export const EditExpensePage = (props) => {
  let navigate = useNavigate()
  let { id } = useParams()

  const onSubmit = (expense) => {
    props.editExpense(id, expense)
    navigate('/')
  }
  const onRemove = () => {
    props.startRemoveExpense({ id })
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
    startRemoveExpense: ({ id }) => dispatch(startRemoveExpense({ id }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)