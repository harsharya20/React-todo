import React, { useState } from 'react'

const AddToDo = (props) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = () =>{

    }
  return (
    <div className='container my-3 text-center'>
        <h3>Add a Task</h3>
        <form onSubmit={submit}>
  <div class="mb-3">
    <label for="title" class="form-label">Task Title</label>
    <input type="text" class="form-control" value={title} id="title"/>
  </div>
  <div class="mb-3">
    <label for="desc" class="form-label">Add a Description</label>
    <input type="text" class="form-control" value={desc} id="desc"/>
  </div>
  <button type="submit" class="btn btn-success btn-sm">Add ToDo</button>
</form>
    </div>
  )
}

export default AddToDo