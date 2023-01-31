import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { AppRouter } from "../../src/router/AppRouter"

describe('Pruebas en Navbar', ()=>{
        const contextValue={
            logged: true,
            user: {
                name: 'John',
                id: 24314231
            },
            logout: jest.fn()
        }

        beforeEach(() => jest.clearAllMocks())
    test('El nombre del usuario tiene q aparecer en el navbar', ()=>{

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        )

    })
})