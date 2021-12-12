import { auth, googleAuthProvider } from "../firebase/firebase"
import { signInWithPopup, signOut } from "@firebase/auth"

export const startLogin = () => {
  return () => {
    return signInWithPopup(auth, googleAuthProvider)
  }
}

export const startLogout = () => {
  return () => {
    return signOut(auth)
  }
}