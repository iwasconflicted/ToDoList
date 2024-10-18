import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

 export interface Todo {
    userId: number
    id: number;
    title?: string;
    completed: boolean;
}

interface TodoQuery {
  
    pageSize: number
}


const useTodosInf = (query: TodoQuery) => useInfiniteQuery<Todo[], Error>({
    queryKey: ["todos", query],
    queryFn: ({pageParam  = 1}) => axios
            .get<Todo[]>("https://jsonplaceholder.typicode.com/todos", {
                params: {
                    _start: (pageParam as number - 1) * query.pageSize,
                    _limit: query.pageSize
                }

            })

            .then((res) => res.data),

                staleTime: 10 * 1000, // 10 sec
                getNextPageParam: (lastPage, allPages) => {
                    return lastPage.length > 0 ? allPages.length + 1 : undefined;
                }, 
                initialPageParam: 1

      
    });


export default useTodosInf;