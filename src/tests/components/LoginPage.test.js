import React from 'react'
import { shallow } from 'enzyme'
import { LoginPage } from '../../components/LoginPage'


test('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLoginGoogle on Login with Google button click', () => {
    const startLoginGoogle = jest.fn()
    const wrapper = shallow(<LoginPage startLoginGoogle={startLoginGoogle}/>)
    wrapper.find('button').at(0).simulate('click')
    expect(startLoginGoogle).toHaveBeenCalled()
})

test('Should call startLoginAnonymous on Check as Anonymous button click', () => {
    const startLoginAnonymous = jest.fn()
    const wrapper = shallow(<LoginPage startLoginAnonymous={startLoginAnonymous} />)
    wrapper.find('button').at(1).simulate('click')
    expect(startLoginAnonymous).toHaveBeenCalled()
})
