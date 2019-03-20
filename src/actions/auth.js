import { firebase, googleAuthProvider } from '../firebase/firebase'

export const login = (uid, isAnonymous) => ({
    type: 'LOGIN',
    uid,
    isAnonymous
})

export const startLoginGoogle = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const startLoginAnonymous = () => {
    return () => {
        return firebase.auth().signInAnonymously()  
    }       
}

export const startConvertToPermanentAccount = () => {
    return () => {   
        firebase.auth().currentUser.linkWithPopup(googleAuthProvider).then(function (usercred) {
            const user = usercred.user;
            window.location.reload()
        }, function (error) {
            console.log("Error upgrading anonymous account", error);
        });
    } 
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut()
    }
}