// {import { createStore } from 'redux'

// const incremenetCount = ({incrementBy = 1} = {}) => ({
//   type: 'INCREMENT',
//   incrementBy
// })

// const decrementCount = ({decrementBy = 1} = {}) => ({
//   type: 'DECREMENT',
//   decrementBy
// })

// const setCount = ({ count }) => ({
//   type: 'SET',
//   count
// })
// const resetCount = () => ({
//   type: 'RESET'
// })

// const store = createStore((state = { count: 0 }, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         count: state.count + action.incrementBy
//       }
//     case 'DECREMENT':
//       return {
//         count: state.count - action.decrementBy
//       }
//     case 'RESET':
//       return {
//         count: 0
//       }
//     case 'SET':
//       return {
//         count: action.count
//       }
//     default:
//       return state
//   }  
// })

// store.subscribe(() => {
//   console.log(store.getState());
// })

// store.dispatch(incremenetCount())

// store.dispatch(setCount({count: 150}))





store.subscribe(() => {
  const state = store.getState()
  console.log(getVisibleExpenses(state.expenses, state.filters));
})

const expeneOne = store.dispatch(addExpense({description: 'rent', amount: 100}))
store.dispatch(editExpense(expeneOne.expense.id, {description: 'not retn', amount: 500}))

store.dispatch(setTextFilter('rent'))
store.dispatch(setTextFilter())