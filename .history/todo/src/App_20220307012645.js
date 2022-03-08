import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";

function App() {
const[todos,setTodos]= useState([
  {
    id: "1",
    task: "Learn React",
    complete: true,
  },
  {
    id:Math.random(),
    text:"read the book",
    isComleted:false
  }
]);


  return (
    <div className="App">
<TodoList toos ={todos}/>
    </div>
  );
}

export default App;
