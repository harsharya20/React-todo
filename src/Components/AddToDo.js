import React, { useState } from 'react'

const AddToDo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) =>{
     e.preventDefault()
     if(!title || !desc){
         alert("title or description cannot be blank !!!")
     }else{
     addTodo(title,desc)
     setTitle("")
     setDesc("")
    }}
  return (
    <div className='container my-3 text-center'>
        <h3>Add a Task</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Task Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Add a Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc"/>
  </div>
  <button type="submit" className="btn btn-success btn-sm">Add ToDo</button>
</form>
    </div>
  )
}

export default AddToDo