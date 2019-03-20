import React from 'react'
import Modal from 'react-modal'

export class LogoutModal extends React.Component {

    onSignIn = () => {
        this.props.startConvertToPermanentAccount(this.props.uid)
    }

    onLogout = () => {
        this.props.startRemoveAllExpenses()
        this.props.startLogout()
    }
    
    render() {
        return (
            <Modal
                isOpen={this.props.modalIsOpen}
                onRequestClose={this.props.closeModal}
                contentLabel='Remove Modal'
                closeTimeoutMS={200}
                className="modal"
                ariaHideApp={false}
            >

                <h3 className="modal__title">Do you really want to logout?</h3>
                <p className="modal__body">Sign in with Google to save your data.</p>
                <div className="modal__buttons">
                    <button className="button" onClick={this.onSignIn}>SIGN IN</button>
                    <button className="button button--secondary" onClick={this.onLogout}>LOGOUT</button>
                </div> 

            </Modal>
        )
    }
}

export default LogoutModal