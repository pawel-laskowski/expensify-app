import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startLoginAnonymously } from '../actions/auth'

export const LoginPage = ({ startLogin, startLoginAnonymously }) => {
  return (
    <div className='box-layout'>
      <div className='box-layout__box'>
        <h1 className='box-layout__title'>Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button onClick={startLogin} className='button button--login'>Login with Google</button>
        <button onClick={startLoginAnonymously} className='button button--login'>Login Anonymously</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
  startLoginAnonymously: () => dispatch(startLoginAnonymously())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)