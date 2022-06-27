import Header from './Components/Header';
import './App.css';
import React, {useState, useEffect} from 'react';
import Footer from './Components/Footer';
import ToDos from './Components/ToDos';
import AddToDo from './Components/AddToDo';

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo = []
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }


  const onDelete=(todo)=>{
  console.log('Ondelete',todo)

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
  localStorage.getItem("todos",JSON.stringify(todos))
}

const addTodo = (title, desc) =>{
  console.log("I am adding this todo",title,desc)
  let sno
  if(todos.length===0){
    sno=0;
  }
  else{
   sno = todos[todos.length-1].sno +1
  }
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc,
  }
  setTodos([...todos,myTodo])

    localStorage.setItem("todos",JSON.stringify(todos))
  
}
  const [todos,setTodos] = useState(initTodo)
  useEffect (() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
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
