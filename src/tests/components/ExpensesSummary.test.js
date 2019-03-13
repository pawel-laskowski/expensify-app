import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'
import { filters } from '../fixtures/filters'

test('should render correctly message for 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0]]} filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render correctly message for 2 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenses={[expenses[0], expenses[1]]} filters={filters}/>)
    expect(wrapper).toMatchSnapshot()
})