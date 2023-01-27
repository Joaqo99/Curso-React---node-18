import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../src/08-useReducer/TodoApp"
import { useTodo } from "../../src/hooks/useTodo"

jest.mock("../../src/hooks/useTodo")


describe('pruebas en <TodoApp />', ()=>{
    useTodo.mockReturnValue({
        todos:[
            {id: 1, description: 'todo test', done: false},
            {id: 2, description: 'todo test true', done: true},
        ], 
        handleNewTodo: jest.fn(), 
        handleToggleTodo: jest.fn(), 
        handleDeleteTodo: jest.fn()
})

    test('debe de mostrar el componente correctamente', ()=>{
        render( <TodoApp />)
        //screen.debug()
        expect( screen.getByText('todo test')).toBeTruthy()
        expect( screen.getByText('todo test true')).toBeTruthy()
        expect( screen.getByRole('textbox')).toBeTruthy()
    })
})