import { signInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from "../../firebase/providers"
import { checkinCredentials, logout, login } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async ( dispatch )=>{
        dispatch( checkinCredentials())
    }
}

export const startGoogleSignIn = (email, password) => {
    return async ( dispatch )=>{
        dispatch( checkinCredentials())

        const result = await signInWithGoogle()
        if(!result.ok) return dispatch( logout(result.errorMessage))
    
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = ({email, password, displayName}) => {
    return async ( dispatch )=>{
        dispatch( checkinCredentials())

        const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName})
        if(!ok) return dispatch( logout(errorMessage))
    
        dispatch(login({displayName, uid, photoURL, email}))
    }
}

export const startLoginWithEmailPassword = ({email, password})=>{
    return async (dispatch) =>{
        dispatch(checkinCredentials())

        const resp = await loginWithEmailPassword({email, password})
        if(!resp.ok) return dispatch( logout(resp.errorMessage))
    
        dispatch(login(resp))
    }
}

export const startLogout = ()=>{
    return async (dispatch) => {
        await logoutFirebase()

        dispatch( logout() )
    }
}