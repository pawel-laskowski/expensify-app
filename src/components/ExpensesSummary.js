import React from "react";
import { connect } from 'react-redux'
import numeral from "numeral";
import selectExpensesTotal from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses"

export const ExpensesSummary = (props) => {
  const expensesCount = props.expenses.length
  const expensesTotal = selectExpensesTotal(props.expenses)
  const expensesWord = expensesCount === 1 ? 'expense' : 'expenses'
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div>
      <h1>Viewing {expensesCount} {expensesWord} totalling {formattedExpensesTotal}</h1>
    </div>
  )
}

const mapStateToProps = (state, props) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
