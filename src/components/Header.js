import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout, startConvertToPermanentAccount, startLoginGoogle } from '../actions/auth'
import { startRemoveAllExpenses } from '../actions/expenses'
import LogoutModal from './LogoutModal'

export class Header extends React.Component {
    state = {
        modalIsOpen: false
    }

    openModal = () => {
        this.setState({ modalIsOpen: true });
    }
    closeModal = () => {
        this.setState({ modalIsOpen: false });
    }

    onLogoutClick = () => {
        if (this.props.auth.isAnonymous) {
            this.openModal()
        } else {
            this.props.startLogout()
        }
    }

    render(){
        return (
            <header className="header">
                <div className="content-container">
                    <div className="header__content">
                        <Link className="header__title" to="/dashboard">
                            <h1>Expensify</h1>
                        </Link>
                        <button className="button button--link" onClick={this.onLogoutClick}>Logout</button>
                    </div>
                </div>
                <LogoutModal
                    uid={this.props.auth.uid}
                    startRemoveAllExpenses={this.props.startRemoveAllExpenses}
                    startConvertToPermanentAccount={this.props.startConvertToPermanentAccount}
                    startLoginGoogle={this.props.startLoginGoogle}
                    startLogout={this.props.startLogout}
                    history={this.props.history}
                    modalIsOpen={this.state.modalIsOpen}
                    closeModal={this.closeModal}
                />
            </header>    
        )
    }
} 

const mapStateToProps = (state, props) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout()),
    startRemoveAllExpenses: () => dispatch(startRemoveAllExpenses()),
    startConvertToPermanentAccount: (uid) => dispatch(startConvertToPermanentAccount(uid)),
    startLoginGoogle: () => dispatch(startLoginGoogle())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
