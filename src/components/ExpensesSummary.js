import React from "react";
import { connect } from 'react-redux'
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses"

export const ExpensesSummary = (props) => {
  const expensesCount = props.expenses.length
  const expensesTotal = selectExpensesTotal(props.expenses)
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  const hiddenExpenses = props.allExpenses.length - props.expenses.length
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__titel">Viewing <span>{expensesCount}</span> {expensesWord} totalling <span>{formattedExpensesTotal}</span></h1>
        {hiddenExpenses > 0 && <p>{hiddenExpenses} hidden expenses because of filters. Remove filters to see all expenses.</p>}
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
    allExpenses: state.expenses
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
