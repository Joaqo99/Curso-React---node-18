import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('Pruebas en <PublicRoute />', ()=>{
    test('debe de mostrar el children si no está auth', ()=>{
        render(
            <AuthContext.Provider value={{logged:false}}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )
        expect( screen.getByText('Ruta publica')).toBeTruthy()
    })

    test('debe de poder navegar si está auth', ()=>{
        
        const contextValue={
            logged: true,
            user: {
                name: 'John',
                id: 24314231
            }
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        }/>
                        <Route path="marvel" element={<h1>Pagina Marvel</h1>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        screen.debug()
    })

})