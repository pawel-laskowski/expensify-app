import React from 'react'
import { shallow } from 'enzyme'
import { RemoveModal } from '../../components/RemoveModal'
import expenses from '../fixtures/expenses'

let startRemoveExpense, history, wrapper, expense, modalIsOpen, closeModal

beforeEach(() => {
    startRemoveExpense = jest.fn()
    modalIsOpen = true
    closeModal = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(
        <RemoveModal
            expense={expenses[2]}
            startRemoveExpense={startRemoveExpense}
            history={history}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
        />)
})


test('should handle removeExpense', () => {
    wrapper.find('button').at(0).simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id })
})

test('should close modal', () => {
    wrapper.find('button').at(1).simulate('click')
    expect(closeModal).toHaveBeenCalled()
})