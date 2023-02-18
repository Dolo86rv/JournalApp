import { authSlice, checkingCredentials, loggin, logout } from '../../../src/store/auth/authSlice' 
import { demoUser, initialState, authenticatedState } from '../../fixtures/authFixtures'

describe('Pruebas en el authSlice', () => { 
    
    test('debe de resgresar el estado inicial y llamarse "auth"', () => { 
        expect(authSlice.name).toBe('auth')

        const state = authSlice.reducer(initialState, {})
        console.log(state)

        expect( state ).toEqual( initialState )
    })

    test('debe realizar la autenticacion', () => { 
        
        //console.log( loggin( demoUser))
        const state = authSlice.reducer(initialState, loggin( demoUser) )
        expect( state ).toEqual({
            status: 'authenticated',
            uid: demoUser.uid,
            email: demoUser.email,
            displayName:  demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })
    })

    test('debe realizar el logout sin argumentos', () => { 
        
        const state = authSlice.reducer( authenticatedState, logout() )
        expect(state).toEqual({
            status: 'no-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        })

    })
    test('debe realizar el logout yo mostrar un mensaje de error', () => { 
        
        const errorMessage = 'Credenciales no son correctas'
        const state = authSlice.reducer( authenticatedState, logout({ errorMessage }))
        expect(state).toEqual({
            status: 'no-authenticated',
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: errorMessage,
        })
    })
    test('debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer( authenticatedState, checkingCredentials())
        expect( state.status ).toBe('checking')

    })
})