import { loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, logout, loggin } from "./authSlice"

export const checkingAuthentication = ( email, password ) =>{
    return async( dispatch ) => {

        dispatch(checkingCredentials())
    }
}

export const startGoogleSignIn = () => {
    
    return async(dispatch)=>{
        
        dispatch(checkingCredentials())
        
        const result = await signInWithGoogle()
        if ( !result.ok ) return dispatch( logout(result.errorMessage))

        dispatch( loggin( result ))
        //console.log({result})
    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    
    return async(dispatch) => {
        
        dispatch(checkingCredentials())

        const { ok, uid, photoURL, errorMessage } = await registerUserWithEmailPassword({ email, password, displayName})
        
        if( !ok ) return dispatch( logout({errorMessage}))

        dispatch( loggin({ uid, displayName, email, photoURL}))
    }
}

export const startLoginWithEmailPassword = ({ email, password}) => {
    
    return async(dispatch) => {
        
        dispatch(checkingCredentials())

        const resp = await loginWithEmailPassword({ email, password })
        console.log(resp)

        if( !resp.ok ) return dispatch( logout( resp ))
        dispatch(loggin( resp ))

    }

}