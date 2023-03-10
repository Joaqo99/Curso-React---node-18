import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext )

    return (
        <>
            <h1>LoginPage <small>{user?.name}</small> </h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify(user, null, 3) }
            </pre>
            <button
                aria-label="btn"
                className="btn btn-primary"
                onClick={()=> setUser({id: '123', name:'John', email: 'john@example.com'})}>
                Set user
            </button>
        </>
    );
}