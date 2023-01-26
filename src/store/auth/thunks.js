import { Login } from "@mui/icons-material"
import { signInWithGoogle } from "../../firebase/providers"
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
        console.log({result})
    }
}