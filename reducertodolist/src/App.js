import React from 'react';
import Todos from "./todos";
import Addtodo from "./addform";


class App extends React.Component{
  state = {
    todos: [
      {id: 1, content: "buy some milk"},
      {id:2, content: "Finsih Redux homework"}

    ]
  }

  deletedItem = (id) => {
    const todos = this.state.todos.filter( todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  
  addToDo = (todo) => {
todo.id = Math.random();
let todos = [...this.state.todos, todo];
this.setState({
  todos
})
  }

  render(){
    return(
      <div>
        <h1>To do list</h1>
        <Todos todos={this.state.todos} deletedItem={this.deletedItem}/>
        <Addtodo addtodo={this.addToDo}/>
      </div>
    )
  }
}

export default App;
