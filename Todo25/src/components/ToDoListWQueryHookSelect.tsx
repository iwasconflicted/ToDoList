import { useState } from "react";
import useTodos from "../hooks/useToDos"

const ToDoListWQueryHookSelect = () => {

        const [userId, setUserid] = useState<number>()

        const {data: todos, error, isLoading} = useTodos(userId);

  return (
    <>
    {isLoading ? <p>Loading....</p> :null}
    {error ? <p>{error.message}:</p> :null}

    <select value={userId} className="form-select mb-3" onChange={(e) => setUserid(parseInt(e.target.value))}>
      <option value={""}></option>
      <option value={"1"}>User 1</option>
      <option value={"2"}>User 2</option>
      <option value={"3"}>User 3</option>
    </select>

    <ul className="list-group" data-bs-theme="dark"  >
               
                {todos?.map((todo) => (
                    <li className="list-group-item" key={todo.userId}>{todo.title}</li>
               ))}
    </ul>
       
    </>
  )
}

export default ToDoListWQueryHookSelect