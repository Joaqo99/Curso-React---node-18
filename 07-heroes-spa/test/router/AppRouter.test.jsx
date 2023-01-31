import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en AppRouter', ()=>{
    test('debe de mostrar el login si no está Auth', ()=>{
        const contextValue = {
            logged: false
        }

        render(
            <MemoryRouter initialEntries={['/login']}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter />
                </AuthContext.Provider>
            </MemoryRouter>
        )

        expect( screen.getAllByText('Login').length).toBe(2)
    })
})