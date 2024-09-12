import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const ToDoListWQuery = () => {
  const fetchTodos = () =>
    axios
      .get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.data)
      

  const { data: todos,error,isLoading } = useQuery<Todo[],Error>({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
  
  return (
    <>
    {isLoading ? <p>Loading......</p> :null}
    {error ? <p>{error.message}:</p> :null}
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </>
  );
};

export default ToDoListWQuery;