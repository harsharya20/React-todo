import React from 'react'
import ToDo from './ToDo'
function ToDos(props) {
  return (
    <div className='container'>
        <h3 className='text-center'>ToDo List </h3>
        {props.todos.map((todo)=>{
            return <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete} /> //passing todo and onDelete to the ToDo
        })}
        
    </div>
  )
}

export default ToDos