import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en el useForm', ()=>{

    const initialForm ={
        name: 'joaco',
        mail: 'joaco@gmail.com'
    }

    test('debe de regresar la info por defecto', ()=>{
        const {result} = renderHook(()=> useForm(initialForm))
        expect(result.current).toEqual({
            name: 'joaco',
            mail: 'joaco@gmail.com',
            formState: {name: 'joaco', mail: 'joaco@gmail.com'},
            onInputChange: expect.any(Function),
            onReset: expect.any(Function)
        })
    })

    test('debe de cambiar el nombre del formulario', ()=>{
        const {result} = renderHook(()=> useForm(initialForm))

        act(()=>{
            result.current.onInputChange({ target: {name: 'name', value:'carlos'}})
        })

        expect(result.current.name).toEqual('carlos')
    })
})