import axios from "axios";
import { Todo } from "./useTodosInf";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEY_TOOLS } from "../constants";
import ApiClient from "../services/apiClient";



const apiClient = new ApiClient<Todo>('todos/')

interface addTodoContext {
    previousTodos: Todo []
}


const useAddTodo = (onAdd: () => void) => {

    const queryClient = useQueryClient();

       return useMutation<Todo,Error,Todo,addTodoContext>({
            mutationFn: apiClient.post,
                
              

                onMutate: (newTodo: Todo) => {
                    const previousTodos = queryClient.getQueryData<Todo[]>(CACHE_KEY_TOOLS
                    ) || []

                    queryClient.setQueryData<Todo[]>(CACHE_KEY_TOOLS, (todos = []) => [
                            newTodo, ... todos,
                    ]);
                     onAdd();
                     return {previousTodos}

                },
                

                onSuccess:(saveTodo,newTodo) => {
                    console.log(saveTodo)

                    //Invalidate the cache
                    //will not show because jsonplaceholder is a fake api
                    // queryClient.invalidateQueries({
                    //     queryKey: ['todos']
                    // })
                   queryClient.setQueryData<Todo[]>(CACHE_KEY_TOOLS, (todos) => todos?.map((todo) => (todo === newTodo ? saveTodo: todo)));
                },
                onError: () => {
                    console.log("Custom error message");
                    
                },

                
            });

        }

export default useAddTodo