import React from 'react'
import { Routes, Route, HistoryRouter } from 'react-router-dom'
import { createBrowserHistory } from 'history';
import Header from '../components/Header'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'

export const history = createBrowserHistory()

const AppRouter = () => (
  <HistoryRouter history={history}>
    <Header />
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<ExpenseDashboardPage />} />
      <Route path="/create" element={<AddExpensePage />} />
      <Route path="/edit/:id" element={<EditExpensePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HistoryRouter>
)

export default AppRouter