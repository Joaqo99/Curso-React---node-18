import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

export const useTodo = () => {
    
    const init = ()=>{
        return JSON.parse(localStorage.getItem('todos')) || []
    }

    const initialState = []

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(()=>{
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleNewTodo = todo =>{
        const action = {
            type: '[TODO] Add todo',
            payload: todo
        }

        dispatch(action)
    }

    const handleDeleteTodo = id =>{
        const action = {
            type: '[TODO] Remove todo',
            payload: id
        }

        dispatch(action)
    }

    const handleToggleTodo = id =>{
        const action = {
            type: '[TODO] Toggle todo',
            payload: id
        }

        dispatch(action)
    }

    return {
        todos,
        handleNewTodo,
        handleToggleTodo,
        handleDeleteTodo
    };
}