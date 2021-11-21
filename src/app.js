import React from 'react'
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/initialize'
import 'react-dates/lib/css/_datepicker.css'

import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'

const store = configureStore()

store.dispatch(addExpense({description:'something', amount: 300, createdAt: 123}))
store.dispatch(addExpense({description:'water', amount: 500, createdAt: 4123}))
store.dispatch(addExpense({description:'gas bill', amount: 200, createdAt: 3123}))
store.dispatch(sortByAmount())
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))