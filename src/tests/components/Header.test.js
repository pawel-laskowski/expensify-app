import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

let openModal, startLogout, onLogoutClick, auth, altAuth, wrapper

beforeEach(() => {
    openModal = jest.fn()
    startLogout = jest.fn()
    onLogoutClick = jest.fn()
    auth = {
        isAnonymous: true
    }
    altAuth = {
        isAnonymous: false
    }
    wrapper = shallow(
        <Header
            openModal={openModal}
            startLogout={startLogout}
            onLogoutClick={onLogoutClick}
            auth={auth}
        />)
})

test('should render Header correctly', ()=> {
    const wrapper = shallow(<Header startLogout={() => {}}/>)
    expect(wrapper).toMatchSnapshot()

    // expect(wrapper.find('h1').text()).toBe('Expensify')

    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('should open modal on button click when user is Anonymous', () => {
    wrapper.find('button').simulate('click')
    expect(wrapper.state('modalIsOpen')).toBe(true)
})

test('should logout when user is authenticated', () => {
    wrapper.setProps({
        auth: altAuth
    })
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})