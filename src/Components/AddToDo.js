import React from 'react'

const AddToDo = () => {
  return (
    <div className='container my-3 text-center'>
        <h3>Add a Task</h3>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Task To Do</label>
    <input type="text" class="form-control" id="exampleInputEmail1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Add a Description</label>
    <input type="text" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-success btn-sm">Add ToDo</button>
</form>
    </div>
  )
}

export default AddToDo