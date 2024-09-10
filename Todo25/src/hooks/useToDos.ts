import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ToDo{
    id: number
    title: string
    completed: boolean
}

const useTodos = () =>
{
    const fetchTodos = () =>
        axios
        .get<ToDo[]>("https://jsonplaceholder.typicode.com/todos")
        .then((res) => res.data)



    return useQuery<ToDo[],Error> ({
            queryKey: ["todos"],
            queryFn: fetchTodos
          })

}

export default useTodos;