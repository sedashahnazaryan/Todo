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
    complete: false
  },
  {
    id: Math.random(),
    task: "Learn Firebase",
    complete: false
  },
  {
     id: Math.random(),
    task: "Learn GraphQL",
    complete: f
  
}
]);

   return (
     <div className="App">
       <TodoForm onAdd={(text)=>{

       }}/>
 <TodoList todos={todos}/>
 <TodoFooter />
     </div>
   );
 }

export default App;
