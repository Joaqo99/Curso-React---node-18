import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en <AddCategory />', ()=>{
    test('debe de cambiar el valor de la caja de texto', ()=>{
        render(<AddCategory onNewCategory={()=>{}}/>)
        const input = screen.getByRole('textbox')

        fireEvent.input(input, {target: {value: 'Star Wars'}})
        expect(input.value).toBe('Star Wars')
        screen.debug()
    })

    test('Debe de llamar onNewCategory si el input tiene un valor', ()=>{
        const inputValue = 'Star Wars'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalledWith(inputValue)

    })

    test('No debe de llamar onNewCategory si el input tiene un valor', ()=>{
        const inputValue = ''
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, {target: {value: inputValue}})
        fireEvent.submit(form)

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalledTimes(0)

    })
})