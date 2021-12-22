export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid,
        isAnonymous: action.isAnonymous
      }
    case 'LOGOUT':
      return {}
    default:
      return state;
  }
}