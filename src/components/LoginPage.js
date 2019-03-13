import React from 'react'
import { connect } from 'react-redux'
import { startLoginGoogle, startLoginAnonymous } from '../actions/auth'


export const LoginPage = ({ startLoginGoogle, startLoginAnonymous }) => (
    <div className='box-layout'>
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expesify</h1>
            <p>Get control over your expenses!</p>
            <button className="button button--login" onClick={startLoginGoogle}>Login with Google</button>    
            <button className="button button--login" onClick={startLoginAnonymous}>Check as Anonymous</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLoginGoogle: () => dispatch(startLoginGoogle()),
    startLoginAnonymous: () => dispatch(startLoginAnonymous())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)