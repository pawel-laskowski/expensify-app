import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { 
  startAddExpense, 
  addExpense, 
  editExpense, 
  removeExpense, 
  setExpenses, 
  startSetExpenses, 
  startRemoveExpense, 
  startEditExpense 
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'
import { get, ref, set } from 'firebase/database'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  set(ref(database, 'expenses'), expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' })
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should remove expense from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[0].id
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    })
    return get(ref(database, `expenses/${id}`))
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy()
    done()
  })  
})

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'new note' })
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: { 
      note: 'new note' 
    }
  })
})

test('should edit expenses from firebase', (done) => {
  const store = createMockStore({})
  const id = expenses[1].id
  const updates = { note: 'new note' } 
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id,
      updates
    })
    return get(ref(database, `expenses/${id}`))
  }).then((snapshot) => {
    expect(snapshot.val().note).toBe(updates.note)
    done()
  })
})

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2])
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({})
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ... expenseData
      }
    })
    return get(ref(database, `expenses/${actions[0].expense.id}`))
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({})
  const defaultExpenseData = {
    description: '', 
    note: '', 
    amount: 0, 
    createdAt: 0
  }
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...defaultExpenseData
      }
    })
    return get(ref(database, `expenses/${actions[0].expense.id}`))
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(defaultExpenseData)
    done()
  })
})

test('should setup set expenses action with data', () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({})
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done()
  })
})