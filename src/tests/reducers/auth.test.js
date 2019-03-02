import authReducer from '../../reducers/auth'

test('should set state uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: 1
    }
    const state = authReducer(undefined , action)
    expect(state).toEqual({uid: 1})
})

test('should set state to default for logout', () => {
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({ uid: 1 }, action)
    expect(state).toEqual({})
})