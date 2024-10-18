import { useState } from "react";
import useTodos from "../hooks/useTodos";
import useTodosInf from "../hooks/useTodosInf";
import React from "react";


type Todo = {
  id: number,
  title: string
}

const TodoListWQueryInf = () => {

const pageSize = 20;

 


  const { data: todos, error, isLoading,fetchNextPage,isFetchingNextPage } = useTodosInf({pageSize});

  return (
    <>
      {isLoading ? <p>Loading......</p> : null}
      {error ? <p>{error.message}:</p> : null}
     
      <ul className="list-group">

        {todos?.pages.map((page,index) => (
          <React.Fragment key={index}>
            {page.map(todo =>   (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li> ))}
          </React.Fragment>
        ))}

  
      </ul>
      <button className="btn btn-primary my-3 ms-2" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
       {isFetchingNextPage ? "Loading......" : "LoadMore"}
      </button>
     
    </>
  );
};

export default TodoListWQueryInf;