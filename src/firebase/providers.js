import { async } from "@firebase/util";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";


const googleProvaider = new GoogleAuthProvider()

export const signInWithGoogle = async() => {
    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvaider)
        const credentials = GoogleAuthProvider.credentialFromResult(result)
        const user =  result.user
        const { displayName, email, photoURL, uid } = result.user

        return {
            ok: true,
            //user info
            displayName, email, photoURL, uid
        }
        //console.log({user})
        //console.log({credentials})
        
    } catch (error) {
        const errorCode = error.code 
        const errorMessage = error.message 
        
        return {
            ok: false,
            errorMessage,
        }
    }
}