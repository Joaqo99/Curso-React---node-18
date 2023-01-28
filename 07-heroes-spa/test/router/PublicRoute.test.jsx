import { render, screen } from "@testing-library/react"
import { AuthContext } from "../../src/auth/context/AuthContext"
import { PublicRoute } from "../../src/router/PublicRoute"

describe('Pruebas en <PublicRoute />', ()=>{
    test('debe de mostrar el children si no está auth', ()=>{
        render(
            <AuthContext.Provider value={{logged:false}}>
                <PublicRoute />
            </AuthContext.Provider>
        )
    })
})