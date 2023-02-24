import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, loggin, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startCreatingUserWithEmailPassword, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import { clearNotesLogout } from "../../../src/store/journal/journaSlice"
import { demoUser } from "../../fixtures/authFixtures"

jest.mock('../../../src/firebase/providers')

describe('pruebas en auhtThunks', () => { 
    
    const dispatch = jest.fn()
    beforeEach( ()=>jest.clearAllMocks() )

    test('debe invocar el checkingCredential', async() => { 
        
        await checkingAuthentication()(dispatch)
        expect( dispatch ).toHaveBeenCalledWith( checkingCredentials())
        
    })
    test('startGoogleSignIN debe de llamar el checkingCredentials y el loggin si ok', async() => {

        const loginData = { ok: true, ...demoUser }
        await signInWithGoogle.mockResolvedValue( loginData )

        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(loggin(loginData))
    })
    test('startGoogleSignIN debe de llamar el checkingCredentials y el loggin es Error', async() => {

        const loginData = { ok: false, errorMessage: 'Un error en Google'}
        await signInWithGoogle.mockResolvedValue( loginData )

        await startGoogleSignIn()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith( logout(loginData.errorMessage))
    })
    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login -Exito', async() => { 
        const loginData = { ok: true, ...demoUser}
        const formData = { emai: demoUser.email, password: '123456' }

        await loginWithEmailPassword.mockResolvedValue( loginData )

        await startLoginWithEmailPassword(formData)(dispatch)

        expect( dispatch).toHaveBeenCalledWith( checkingCredentials())
        expect( dispatch).toHaveBeenCalledWith( loggin(loginData))
    })
    test('startLogout debe de llamar logoutFirebase, clearNotes y logout', async() => { 
        
        await startLogout()(dispatch)

        expect( logoutFirebase).toHaveBeenCalled()
        expect( dispatch ).toHaveBeenCalledWith( clearNotesLogout())
        expect( dispatch ).toHaveBeenCalledWith( logout({}))

    })
    test('startCreatingUserWithEmailPassword debe registrar un usuario', async() => { 

        const loginData = { ok:true, ...demoUser, password: '123456'}
        const formData = { email: loginData.email, displayName: loginData.displayName, password: loginData.password }
        
        await registerUserWithEmailPassword.mockResolvedValue(loginData)
        await startCreatingUserWithEmailPassword(formData)(dispatch)
        
        expect( dispatch).toHaveBeenCalledWith( checkingCredentials())
        expect( dispatch).toHaveBeenCalledWith( loggin(loginData))
        

    })

    /*test('startCreatingUserWithEmailPassword debe mostrar un error', async() => { 

        const loginData = { ok: false, errorMessage:'Error al registrar el usuario'}
        
        await registerUserWithEmailPassword.mockResolvedValue(loginData)

        await startCreatingUserWithEmailPassword({})(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))

    })*/


})