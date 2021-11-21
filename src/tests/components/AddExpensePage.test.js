import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpense, wrapper, mockedUsedNavigate

beforeEach(() => {
  addExpense = jest.fn()
  mockedUsedNavigate = jest.fn()
  wrapper = shallow(<AddExpensePage addExpense={addExpense} />)
})

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

test('should render AddExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
  expect(mockedUsedNavigate).toHaveBeenLastCalledWith('/')
  expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})