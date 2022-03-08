import {useState}from "react";
import './App.css';
import TodoList from "./TodoList";
 import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import TodoFooter from "./TodoFooter";
import

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
 <TodoFooter />
     </div>
   );
 }

export default App;