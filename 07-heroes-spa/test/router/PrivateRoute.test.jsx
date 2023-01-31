import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en private route', ()=>{
    test('debe de mostrar el children si está auth', ()=>{

        Storage.prototype.setItem = jest.fn()

        const contextValue={
            logged: true,
            user: {
                name: 'John',
                id: 24314231
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect( screen.getByText('Ruta privada')).toBeTruthy()
        expect( localStorage.setItem).toHaveBeenCalledWith('lastpath', '/search?q=batman')
    })
})