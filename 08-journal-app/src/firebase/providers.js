import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider)
        const {displayName, email, photoURL, uid} = result.user

        return {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (err) {
        const errorCode = err.code
        const errorMessage = err.message

        return{
            ok: false,
            errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({email, password, displayName}) => {
    try{
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password)
        const {uid, photoURL} = resp.user
        console.log(resp)

        await updateProfile(FirebaseAuth.currentUser, {displayName})

        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    
    } catch (err) {
        console.log(err)
        return {ok: false, errorMessage: err.message}
    }

}

export const loginWithEmailPassword = async ({email, password})=> {
    try{
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user

    return {
        ok: true, uid, photoURL, displayName
    }

    } catch (err) {
        return {ok: false, errorMessage: err.message}
    }
}

export const logoutFirebase = async ()=>{
    return await FirebaseAuth.signOut()
}