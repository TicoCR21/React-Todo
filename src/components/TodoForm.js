import React from "react";

export default class extends React.Component
{
  constructor()
  {
    super();
    this.state = 
    {
      task : ""
    };
  }

  onChange = e =>
  {
    this.setState( { task : e.target.value } );
  }

  onAdd = e =>
  {
    e.preventDefault();
    this.props.addTask( this.state.task );
    this.setState( { task : "" } );
  }

  render()
  {
    return(
      <div>
        <input type = "text" value = { this.state.task } onChange = { this.onChange }/>
        <button onClick = { this.onAdd }>
          Add Todo
        </button>
        <button onClick = { this.props.clearTasks }>
          Clear Completed
        </button>
      </div>
    );
  }
  
}