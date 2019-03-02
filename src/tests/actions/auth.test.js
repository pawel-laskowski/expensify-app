import { login, logout } from '../../actions/auth'


test('should generate login action object', () => {
    const action = login(1)
    expect(action).toEqual({
        type: 'LOGIN',
        uid: 1
    })
})

test('should generate logout action object', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})
