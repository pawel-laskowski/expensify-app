import React from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? <Navigate to="/dashboard" /> : children
}

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PublicRoute)