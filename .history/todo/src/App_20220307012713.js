import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";

function App() {
const[todos,setTodos]= useState([
  {
    id: "1",
    task: "Learn Firebase",
    complete: true,
  },
  {
    id: "1",
    task: "Learn Firebase",
    complete: true,
  }
]);


  return (
    <div className="App">
<TodoList toos ={todos}/>
    </div>
  );
}

export default App;
