import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => {
    const expenseCount = props.expenses.length
    const expensesTotal = selectExpensesTotal(props.expenses)
    const formattedValue = numeral(expensesTotal / 100).format('$0,0.00')
    
    return (
        <div>
            <h1>Viewing {expenseCount} expense{expenseCount !== 1 ? 's' : ''} with total value of {formattedValue}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenses: visibleExpenses
    }
}

export default connect(mapStateToProps)(ExpensesSummary)