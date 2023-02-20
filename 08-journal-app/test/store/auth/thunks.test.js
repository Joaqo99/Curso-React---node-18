import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from "../../../src/firebase/providers"
import { checkinCredentials, login, logout } from "../../../src/store/auth/authSlice"
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from "../../../src/store/auth/thunks"
import {demoUser} from '../../fixtures/authFixtures'
import { clearNotesLogout } from '../../../src/store/journal/journalSlice'

jest.mock('../../../src/firebase/providers')

describe('Pruebas en AuthThunks', ()=>{
    const dispatch = jest.fn()

    beforeEach(()=> jest.clearAllMocks())
    
    test('debe de invocar el checkingCredentials', async ()=>{
        await checkingAuthentication()(dispatch)
        expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
    })

    test('startGoogleSignIn debe de llamar checkingCredential y login', async ()=>{
        const loginData = {ok: true , ...demoUser }
        await signInWithGoogle.mockResolvedValue(loginData)
    
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })

    test('startGoogleSignIn debe de llamar checkingCredential y logout con mensaje de error', async ()=>{
        const loginData = {ok: false , errorMessage: 'Un error en Google' }
        await signInWithGoogle.mockResolvedValue(loginData)
    
        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage))

    })

    test('startLoginWithEmailPassword debe de llamar checkingCredentials y login', async ()=>{
        const loginData = {ok: true, ...demoUser}
        const formData = {email: demoUser.email, password:'123456'}
    
        await loginWithEmailPassword.mockResolvedValue(loginData)

        await startLoginWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkinCredentials())
        expect(dispatch).toHaveBeenCalledWith(login(loginData))
    })

    test('startLogout debe de llamar logoutFirebase, clearNotes y logout',async ()=>{
        await startLogout()(dispatch)

        expect(logoutFirebase).toHaveBeenCalled()
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout())
        expect(dispatch).toHaveBeenCalledWith(logout())
    })
})