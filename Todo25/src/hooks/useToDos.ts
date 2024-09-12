import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface ToDo{
    userId: number
    id: number
    title: string
    completed: boolean
}

const useToDos = (userId: number | undefined) =>
{
    const fetchTodos = () =>
        axios
        .get<ToDo[]>("https://jsonplaceholder.typicode.com/todos",{
            params : {
                userId
            }
        })
            
        .then((res) => res.data)



    return useQuery<ToDo[],Error> ({
            queryKey: userId ? ["users", userId, "todos"]: ["todos"],
            queryFn: fetchTodos,
            staleTime: 10 * 1000 //
          })

}

export default useToDos;