import Header from './Components/Header';
import './App.css';
import React, {useState} from 'react';
import Footer from './Components/Footer';
import ToDos from './Components/ToDos';

function App() {
  const onDelete=(todo)=>{
  console.log('Ondelete',todo)

  setTodos(todos.filter((e)=>{
    return e!==todo;
  }))
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
    <ToDos todos={todos} onDelete={onDelete}/>   
    <Footer/>
   </>
  );
}

export default App;
