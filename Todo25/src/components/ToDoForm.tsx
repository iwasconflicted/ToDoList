import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { useRef } from "react"
import { Todo } from "../hooks/useTodosInf"
import useAddTodo from "../hooks/useAddTodo"


const TodoForm = () => {
        const ref = useRef<HTMLInputElement>(null)

       const addTodo = useAddTodo(() => {
            if(ref.current) ref.current.value=""
        })
            
  return (
  <>
    <h1>Form</h1>
    {addTodo.error && <div className="alert alert-danger">{addTodo.error?.message}</div>}

    <form className="row m-3" onSubmit={(e) => {
        e.preventDefault()
        addTodo.mutate({
            id:0,
            title: ref.current?.value,
            completed: false,
            userId:1,

        })


    }}>
        <div className="col">
            <input ref={ref} className="form-control" type="text" />

        </div>
        <div className="col">
        <button className="btn btn-primary">Add</button>

        </div>

    </form>

  </>
  )
}

export default TodoForm