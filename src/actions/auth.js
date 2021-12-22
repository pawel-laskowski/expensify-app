import { auth, googleAuthProvider } from "../firebase/firebase"
import { signInWithPopup, signInAnonymously, signOut, linkWithPopup } from "firebase/auth"

export const login = (uid, isAnonymous) => ({
  type: 'LOGIN',
  uid,
  isAnonymous
})

export const startLogin = () => {
  return () => {
    return signInWithPopup(auth, googleAuthProvider)
  }
}

export const startLoginAnonymously = () => {
  return () => {
    return signInAnonymously(auth)
  }
}

export  const convertAccountToPermanent = () => {
  return () => {
    linkWithPopup(auth.currentUser, googleAuthProvider)
  }
}

export const logout = () => ({
  type: 'LOGOUT'
})

export const startLogout = () => {
  return () => {
    return signOut(auth)
  }
}