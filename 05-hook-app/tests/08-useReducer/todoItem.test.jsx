import { fireEvent, render, screen } from "@testing-library/react"
import { TodoItem } from "../../src/08-useReducer/TodoItem"

describe('Pruebas en <todoItem />', ()=>{
    const todo = {
        id: 1,
        description: 'todo test',
        done: false
    }

    const onDeleteTodoMock = jest.fn()
    const onToggleTodoMock = jest.fn()

    beforeEach(()=> jest.clearAllMocks())

    test('Debe de mostrar el todo pendiente', ()=>{
        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/> )
        const liElement = screen.getByRole('listitem')
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between')
    })

    test('Debe de mostrar el todo completado', ()=>{
        todo.done = true

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/> )
        const spanElement = screen.getByLabelText('span')
        expect( spanElement.className).toContain('text-decoration-line-through')
    })

    test('span debe de llamar al toggletodo cuando se le hace click', ()=>{
        todo.done = true

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/> )
        const spanElement = screen.getByLabelText('span')
        fireEvent.click(spanElement)

        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id )
    })

    test('el boton de borrar debe de llamar a borrartodo cuando se le hace click', ()=>{
        todo.done = true

        render( <TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock}/> )
        const deleteBtn = screen.getByLabelText('delete-btn')
        fireEvent.click(deleteBtn)

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id )
    })

})