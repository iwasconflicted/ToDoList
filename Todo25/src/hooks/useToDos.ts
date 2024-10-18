import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/apiClient"
import { CACHE_KEY_TOOLS } from "../constants";


const apiClient = new ApiClient<ToDo>('todos/')


interface ToDo{
    userId: number
    id: number
    title: string
    completed: boolean
}

// interface TodoQuery {
//     page: number
//     pageSize: number
// }

const useToDos = () =>
{
    
    return useQuery<ToDo[],Error> ({
            queryKey: CACHE_KEY_TOOLS,
            queryFn: apiClient.getAll,
            staleTime: 10 * 1000 // stale to 10 sec
          })

}

export default useToDos;