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

export const startConvertToPermanentAccount = (uid) => {
    console.log(uid);
    console.log(firebase.auth.AuthCredential);
    
    return () => {
        const credential = firebase.auth.GoogleAuthProvider.credential(uid)

        firebase.auth().currentUser.linkAndRetrieveDataWithCredential(credential).then(function (usercred) {
            var user = usercred.user;
            console.log("Anonymous account successfully upgraded", user);
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