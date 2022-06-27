import React from 'react'
import ToDo from './ToDo'
function ToDos(props) {
  let myStyle = {
    minHeight: "10vh"
  }
  return (
    <div className='container' style={myStyle}>
        <h3 className='text-center'>ToDo List </h3>
        {props.todos.length===0? "No Todos to display":
        props.todos.map((todo)=>{
            return(
              <>
             <ToDo todo={todo} key={todo.sno} onDelete={props.onDelete} /> <hr/>
             </> 
             )                               //passing todo and onDelete to the ToDo
        })
              
    }
    </div>
  )
}

export default ToDos