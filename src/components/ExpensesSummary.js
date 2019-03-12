import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = (props) => {
    const visibleExpenses = selectExpenses(props.expenses, props.filters)

    const expenseCount = visibleExpenses.length
    const expensesTotal = selectExpensesTotal(visibleExpenses)
    const formattedValue = numeral(expensesTotal / 100).format('$0,0.00')
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> expense{expenseCount !== 1 ? 's' : ''} with total value of <span>{formattedValue}</span></h1>
                <h2 className="page-header__title ">All expenses: <span>{props.expenses.length}</span></h2>
                <h2 className="page-header__title ">Hidden expenses: <span>{props.expenses.length - expenseCount}</span></h2>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpensesSummary)