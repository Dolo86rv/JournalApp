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
        loggin: ( state, action) => {

        },
        logout: ( state, payload) => {

        },
        checkingCredentials: ( state ) => {
            state.status = 'checking'
        }
    },
})

export const { loggin, logout, checkingCredentials } = authSlice.actions // these are actions created functions