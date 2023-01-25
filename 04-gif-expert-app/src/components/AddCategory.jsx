import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('Star Wars')

    const onInputChange = (e)=>{
        setInputValue(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault()
        if( inputValue.trim().length <= 1) return

        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}
