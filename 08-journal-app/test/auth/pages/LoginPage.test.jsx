const { render, screen, fireEvent } = require("@testing-library/react");
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {LoginPage} from '../../../src/auth/pages/LoginPage'
import { authSlice } from '../../../src/store/auth/authSlice';
import { startGoogleSignIn } from '../../../src/store/auth/thunks';
import {notAuthenticatedState} from '../../fixtures/authFixtures'

const mockStartGoogleSignIn = jest.fn();
const mockStartLoginWithEmailPassword = jest.fn();

jest.mock('../../../src/store/auth/thunks', ()=>({
    startGoogleSignIn: ()=> mockStartGoogleSignIn,
    startLoginWithEmailPassword: ({email, password})=> {
        return () => mockStartLoginWithEmailPassword({email, password})
    },
}))

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
    preloadedState: {
        auth: notAuthenticatedState
    }
})

jest.mock('react-redux', ()=>({
    ...jest.requireActual('react-redux'),
    useDispatch: ()=> (fn) => fn(),
}))


describe('Pruebas en el LoginPage', ()=>{
    beforeEach(()=> jest.clearAllMocks());
    /*test('Debe de mostrar el componente correctamente', ()=>{
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        expect( screen.getAllByText('Login').length).toBeGreaterThanOrEqual(1) 
    });

    test('boton de google debe de llamar el startGoogleSignIn', ()=>{
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const googleBtn = screen.getByLabelText('google-btn');
        fireEvent.click(googleBtn);

        expect(mockStartGoogleSignIn).toHaveBeenCalled()
    })*/

    test('submit debe de llamar startLoginWithEmailAndPassword', ()=>{

        const email = 'test@google.com'
        const password = '123456'

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </Provider>
        );

        const emailField = screen.getByRole('textbox', {name: 'Correo'})
        fireEvent.change(emailField, {target: {name: 'email', value: email}})

        const passwordField = screen.getByTestId('password')
        fireEvent.change(passwordField, {target: {name: 'password', value: password}})
    
        const loginForm = screen.getByLabelText('submit-form')
        fireEvent.submit(loginForm)

        expect( mockStartLoginWithEmailPassword ).toHaveBeenCalledWith({
            email: email,
            password: password
        })
    })
});