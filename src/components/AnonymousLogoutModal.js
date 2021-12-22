import React from 'react'
import Modal from 'react-modal'

export const AnonymousLogoutModal = (props) => {
  return (
    <Modal
      isOpen={props.modalIsOpen}
      onRequestClose={props.closeModal}
      ariaHideApp={false}
      contentLabel="RemoveExpense"
      closeTimeoutMS={200}
      className="modal modal--logout"
    >
      <h3 className="modal__titel">If you logout all expenses will be removed. Login with Google to save your expenses.</h3>
      <div className="modal__buttons">
        <button className="button button--secondary" onClick={props.startLogout}>Logout</button>
        <button className="button button" onClick={props.convertAccountToPermanent}>Login with Google</button>    
      </div>
    </Modal>
  )
} 

export default AnonymousLogoutModal