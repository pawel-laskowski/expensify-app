import React from 'react'
import { connect } from "react-redux";
import { useParams, useNavigate } from 'react-router-dom';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import RemoveExpenseModal from './RemoveExpenseModal';

export const EditExpensePage = (props) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const expense = props.expenses.find(expense => expense.id === id)
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const onSubmit = (expense) => {
    props.startEditExpense(id, expense)
    navigate('/')
  }
  const onRemove = () => {
    props.startRemoveExpense({ id })
    navigate('/')
  }
  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
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
          expense={expense}
          onSubmit={onSubmit}
        />
        <button className="button button--secondary" onClick={openModal}>Remove Expense</button>
        <RemoveExpenseModal 
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          onRemove={onRemove}
        />        
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