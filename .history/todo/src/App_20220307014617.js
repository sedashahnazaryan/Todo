import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
function App() {
const[todos,setTodos]= useState([
  {
    id: "1",
    task: "Learn React",
    complete: true,
  },
  {
    id: "2",
    task: "Learn Firebase",
    complete: true,
  },
  {
  id: "3",
    task: "Learn GraphQL",
    complete: false,
  
}
]);


  return (
    <div className="App">
<TodoList todos ={todos}/>
    </div>
  );
}

export default App;
