import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component 
{
  constructor()
  {
    super();
    this.state = {
      todoList : [ { task : "Play League of Legends", id : Date.now(), completed : false } ]
    }
  }

  addTask = task =>
  {
    this.setState( { todoList : [ ...this.state.todoList, { task, id : Date.now(), completed : false } ] } );
  }

  toggle = id => 
  {
    this.setState( { todoList : this.state.todoList.map( todo =>
      {
        if( id === todo.id )
          return { ...todo, completed : !todo.completed };
        else
          return todo;
      } ) } );
  }

  clearTasks = ( e ) =>
  {
    e.preventDefault();
    this.setState( { todoList : this.state.todoList.filter( task => !task.completed ) } )
  }
  
  render() {
    return (
      <div>
        <h2>Todo List: MVP</h2>
        <TodoList todoList = { this.state.todoList } toggle = { this.toggle } />
        <TodoForm addTask = { this.addTask } clearTasks = { this.clearTasks } />
      </div>
    );
  }
}

export default App;
