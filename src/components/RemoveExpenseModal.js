import React from 'react'
import Modal from 'react-modal'

export const RemoveExpenseModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.closeModal}
    contentLabel="RemoveExpense"
    closeTimeoutMS={200}
    className="modal"
  >
    <h3 className="modal__titel">Do you want to remove this expense?</h3>
    <div className="modal__buttons">
      <button className="button button--secondary" onClick={props.onRemove}>Yes</button>
      <button className="button button" onClick={props.closeModal}>No</button>    
    </div>
  </Modal>
)

export default RemoveExpenseModal