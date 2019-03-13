import React from 'react'
import Modal from 'react-modal'

export class RemoveModal extends React.Component {

    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id })
        this.props.history.push('/')
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
                <h3 className="modal__title">Do you really want to remove this expense?</h3>
                <p className="modal__body">"{this.props.expense.description}"</p>
                <div className="modal__buttons"> 
                    <button className="button button--secondary" onClick={this.onRemove}>REMOVE</button>
                    <button className="button" onClick={this.props.closeModal}>BACK</button>
                </div>
            </Modal>
        )
    }
}

export default RemoveModal