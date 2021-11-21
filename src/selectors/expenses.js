import moment from "moment"

//get VisibleExpenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true
    const textMatch = typeof text !== 'string' || expense.description.toLocaleLowerCase().includes(text.toLocaleLowerCase())
    
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1
    }
  })
}