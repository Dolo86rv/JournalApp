import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FirebaseAuth } from '../firebase/config'
import { loggin, logout } from '../store/auth'
import { startLoadingNotes } from '../store/journal/thunks'

export const useCheckAuth = () => {
    
    const { status } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    
    useEffect(() => {
        onAuthStateChanged(FirebaseAuth, async(user)=>{
            if( !user ) return dispatch(logout())
            
            const { uid, email, displayName, photoURL } = user
            dispatch(loggin({ uid, email, displayName, photoURL}))
            dispatch(startLoadingNotes())
        })
    }, [])
    return {
        status
    }
}
