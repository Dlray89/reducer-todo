import React, { useState, useReducer } from "react";
import { toDoReducer, toDos } from "../reducer/toDoReducer";



const ToDoList = () => {

const [state, dispatch] = useReducer(toDoReducer, toDos);
console.log(state, dispatch)





return(
    <div>
    {state.map(todo => (
        <div key={todo.id} >{todo.content}
        </div>
    ))}
    <input type="text" />
    <button>Add New Task</button>
   
   </div>
)
}
export default ToDoList