import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking', //'checking', 'not-authenticated', 'authenticated'
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        errorMessage: null,
    },
    reducers: {
        loggin: ( state, {payload}) => {
            state.status = 'authenticated', //'checking', 'not-authenticated', 'authenticated'
            state.uid = payload.uid,
            state.email = payload.email,
            state.displayName = payload.displayName,
            state.photoURL = payload.photoURL,
            state.errorMessage = null
        },
        logout: ( state, { payload }) => {
            state.status = 'no-authenticated', //'checking', 'not-authenticated', 'authenticated'
            state.uid = null,
            state.email = null,
            state.displayName = null,
            state.photoURL = null,
            state.errorMessage = payload?.errorMessage
        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    },
})

export const { loggin, logout, checkingCredentials } = authSlice.actions // these are actions created functions