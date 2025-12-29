import { useState, useEffect} from "react";
import Button from "./Button";

// Napravi button i za pribavqne na zadachi - iznesi hendler-ite tuk

export default function List() {
    const [todos, setTodos] = useState([]);

    console.log('Todos ->', todos);
    

    useEffect(() => {
        async function fetchTodos() {
            const response = await fetch('http://localhost:3030/jsonstore/todos');
            console.log(response);

            const result = await response.json();
            console.log('result ->', result);
            
            setTodos(() => {
                const todosToComplete = Object.values(result).filter((todo) => todo.isCompleted == false);
                console.log('todosToComplete ->', todosToComplete);            
                return Object.values(todosToComplete);
            });            
        }

        fetchTodos();
    }, []);
    
    return(
        <>
            <h2>TODOS to complete:</h2>
            <ul>
                {todos.map((todo) => 
                    <li key={todo._id}>
                        {todo.text} is {todo.isCompleted ? 'completed' : 'NOT completed'}
                    </li>
                )}
            </ul>
            <Button todos={todos} setTodos={setTodos}/>            
        </>
    )
}