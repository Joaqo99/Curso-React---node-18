import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = ()=>{

    const {formState, onInputChange, onReset} = useForm({
        username: '',
        email: '',
        password: ''
    })

    const { username, email, password } = formState

    useEffect(()=>{
    }, [])

    useEffect(()=>{
    }, [formState])

    useEffect(()=>{
    }, [email])

    return (
        <>
            <h1>Formulario con custom hook</h1>
            <hr />

            <input
                type="text" 
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}    
                onChange={onInputChange}
            />

            <input
                type="email" 
                className="form-control mt-2"
                placeholder="joaqo9909@gmail.com"
                name="email"
                value={email}   
                onChange={onInputChange} 
            />

            <input
                type="password" 
                className="form-control mt-2"
                placeholder="contraseña"
                name="password"
                value={password}   
                onChange={onInputChange} 
            />

            <button 
                className="btn btn-primary mt-3"
                onClick={onReset}
                >Borrar</button>
        </>
    )
}