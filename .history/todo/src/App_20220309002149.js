import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";
 import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";


function App() {
const[todos,setTodos]= useState([
  {
    id: Math.random(),
    task: "Learn React",
    complete: true
  },
  {
    id: Math.random(),
    task: "Learn Firebase",
    complete: true
  },
  {
     id: Math.random(),
    task: "Learn GraphQL",
    complete: false
  
}
]);

   return (
     <div className="App">
       <TodoForm/>
 <TodoList todos={todos}/>
 <Todo
     </div>
   );
 }

export default App;
