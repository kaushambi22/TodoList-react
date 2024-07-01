import React from 'react'
import TodoItem from "./TodoItem"

const Todos = (props) => {
  return (
    <div className="container">
      <h3 className="my-3">Todo-List</h3>
      {props.todo.length===0?"no todos to display":
      props.todo.map((todo)=>{
        return(
          <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
  )})}
      
    </div>
  )
}

export default Todos
