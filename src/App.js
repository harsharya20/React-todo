import Header from './Components/Header';
import './App.css';
import React, {useState} from 'react';
import Footer from './Components/Footer';
import ToDos from './Components/ToDos';
import AddToDo from './Components/AddToDo';

function App() {
  const onDelete=(todo)=>{
  console.log('Ondelete',todo)

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
}

const addTodo = (title, desc) =>{
  console.log("I am adding this todo",title,desc)
  let sno = todos[todos.length-1].sno +1
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos,myTodo])
}
  const [todos,setTodos] = useState([
    {
    sno: 1,
    title: "go to market",
    description:"job1"
  },
  {
    sno: 2,
    title: "go to mall",
    description:"job2"
  }, {
    sno: 3,
    title: "go to study",
    description:"job3"
  }
]);
  return (
   <>
    <Header title = "My To Do List" searchBar= {false}/>
    <AddToDo addTodo={addTodo}/>
    <ToDos todos={todos} onDelete={onDelete}/>   
    <Footer/>
   </>
  );
}

export default App;
