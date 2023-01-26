import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
    const {description, onInputChange, onReset} = useForm({
        description: ''
    })

    const onFormSubmit = (e) => {
        e.preventDefault()
        if (description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            description,
            donde: false,
        }

        onNewTodo(newTodo)
        onReset()
    }

    return (
        <form onSubmit={ onFormSubmit }>
            <input 
                type="text" 
                placeholder="Qué hay que hacer?"
                className="form-control"
                value={description}
                onChange={onInputChange}
                name="description"
            />
            <button
                type="submit"
                className="btn btn-outline-primary mt-1"
            >
                Agregar
            </button>
        </form>
    );
}