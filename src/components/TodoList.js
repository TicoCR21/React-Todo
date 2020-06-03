import React from "react";
import Todo from "./Todo";

export default function( props )
{
  return(
    <div>
      { props.todoList.map( todo => <Todo key = { todo.id } todo = { todo } toggle = { props.toggle } />) }
    </div>
  );
}