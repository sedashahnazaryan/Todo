import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";
 import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";


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
    complete: true
  
}
]);

   return (
     <div className="App">
       <TodoForm onAdd/>
 <TodoList todos={todos}/>
 <TodoFooter />
     </div>
   );
 }

export default App;
