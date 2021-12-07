import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpense, startRemoveExpense, wrapper, mockedUsedNavigate

beforeEach(() => {
  editExpense = jest.fn()
  startRemoveExpense = jest.fn()
  mockedUsedNavigate = jest.fn()
  wrapper = shallow(
    <EditExpensePage 
      expenses={expenses} 
      editExpense={editExpense} 
      startRemoveExpense={startRemoveExpense} 
    />
  )
})

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
  useParams: jest.fn().mockReturnValue({ id: '1' })
}))

test('should render EditExpensePage', () => {
  expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
  expect(mockedUsedNavigate).toHaveBeenLastCalledWith('/')
  expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('should handle startRemoveExpense', () => {
  wrapper.find('button').simulate('click')
  expect(mockedUsedNavigate).toHaveBeenLastCalledWith('/')
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id})  
})