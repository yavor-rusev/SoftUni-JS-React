export default function Button(props) {
    async function completeTaskHandler() {        
        const taskUrl = `http://localhost:3030/jsonstore/todos/${props.todos[0]._id}`;
        console.log(taskUrl);

        const responsePUT = await fetch(taskUrl, {
            method: "PUT",
            body: JSON.stringify({
                _id: props.todos[0]._id,
                text: props.todos[0].text,
                isCompleted: true
            })
        });       
        //Pri _id: todo_10 i nagore servera vrushta za responsePUT code: 204 (no content) vmesto 200    
        console.log('PUT response ->', responsePUT);

        const result = await responsePUT.json();
        console.log('PUT result ->', result); 
        
        const updatedTodosResponseGET = await fetch('http://localhost:3030/jsonstore/todos');
        console.log('updatedResponseGET ->', updatedTodosResponseGET);

        const updatedTodosResult = await updatedTodosResponseGET.json();
        console.log('updatedTodosResultGET ->', updatedTodosResult);        
                
        props.setTodos(() => {
            const newTodos = Object.values(updatedTodosResult).filter((todo) => todo.isCompleted == false);;          
            console.log('Set newTodos ->', newTodos);
            return newTodos;
        });
    }
    
    return(
        <button onClick={completeTaskHandler}>Complete task</button>
    )
}