import { authReducer } from "../../../src/auth/context/authReducer"
import { types } from "../../../src/auth/types/types"

describe('Pruebas en authReducer', ()=>{
    test('debe de retornar el estado por defecto', ()=>{
        const state = authReducer({ logged: false}, {})
        expect(state).toBe(state)
    })

    test('debe de llamar el login, autenticar y establecer el usuario', ()=>{
        const state = authReducer({ logged: false}, {type: types.login, payload:{id: 123, name:'Testeo'}})
        expect(state).toEqual({
            logged: true,
            user:{
                name: 'Testeo',
                id: 123
            }
        })
    })
})