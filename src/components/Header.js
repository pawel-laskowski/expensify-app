import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout, convertAccountToPermanent } from '../actions/auth'
import AnonymousLogoutModal from './AnonymousLogoutModal'

export const Header = ({ startLogout, convertAccountToPermanent, isAnonymous }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const openModal = () => {
    setIsOpen(true);
  }
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link className="header__title" to="/dashboard">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--link" onClick={isAnonymous ? openModal : startLogout }>Logout</button>   
        </div>
      </div>
      <AnonymousLogoutModal 
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        startLogout={startLogout}
        convertAccountToPermanent={convertAccountToPermanent}
      />
    </header>
  )
}

const mapStateToProps = (state, props) => ({
  isAnonymous: state.auth.isAnonymous
})

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout()),
  convertAccountToPermanent: () => dispatch(convertAccountToPermanent())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)