import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";

function App() {
const[todos,setTodos]= useState([
  {
    id:Math.random(),
    text:"read the book",
    isComleted:false
  },
  {
    id:Math.random(),
    text:"read the book",
    isComleted:false
  }
]);


  return (
    <div className="App">
<TodoList to/>
    </div>
  );
}

export default App;
