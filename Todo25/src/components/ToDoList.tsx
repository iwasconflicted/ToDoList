import axios from "axios"
import { useState, useEffect } from "react"

interface ToDo{
    id: number
    title: string
    completed: boolean
}


const ToDoList = () => {

// Lets create a fetch data function to help us fetch our data with axios
const [todos, setTodos] = useState<ToDo[]>([]);
const [error, setError] = useState('');


const fetchData = () => 
{
    axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then(res => setTodos (res.data))
    .catch(error => setError(error));
}

useEffect(() => {

 fetchData();

}, [])



  return (
    <>
        {todos.map((todo) => {
            <li key={todo.id}>{todo.title}</li>
        })}
    </>
  )
}

export default ToDoList