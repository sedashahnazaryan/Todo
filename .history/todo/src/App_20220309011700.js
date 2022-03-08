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
    text: "Learn React",
    complete: false
  },
  {
    id: Math.random(),
    text: "Learn Firebase",
    complete: false
  },
  {
     id: Math.random(),
    text: "Learn GraphQL",
    complete: false
  
}
]);

   return (
     <div className="App">
       <TodoForm onAdd={(text)=>{
setTodos([
  ...todos,
  {
    id: Math.random(),
    text: text,
    complete: false
  }
]);
       }}/>
 <TodoList todos={todos}/>
 <TodoFooter todos={todos}onClearCompleted={()=>{
   todos.filter((/>
     </div>
   );
 }

export default App;
