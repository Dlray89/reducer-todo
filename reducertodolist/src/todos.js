import React from "react";



const Todos = ({todos, deletedItem}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return(
                <div key={todo.id}>
                    <span onClick={() =>{deletedItem(todo.id)}}>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p>  Nothing left </p>
    )
 return(
     <div>
            {todoList}
     </div>
 )
}

export default Todos;