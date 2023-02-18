import { signInWithGoogle } from "../../../src/firebase/providers"
import { checkingCredentials, loggin, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn } from "../../../src/store/auth/thunks"
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
})