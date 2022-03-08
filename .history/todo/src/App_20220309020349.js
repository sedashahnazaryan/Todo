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
       <div cl>TODO</div>
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
 <TodoList 
 todos={todos}
  onDelete={(todo)=>{
    setTodos(todos.filter((t)=>t.id !==todo.id));
}}
onChange={(newTodo)=>{
setTodos(todos.map((todo)=>{
  if(todo.id===newTodo.id){
    return newTodo;
  }
  return todo;
}));
}}
   />
 <TodoFooter todos={todos}onClearCompleted={()=>{
   setTodos(todos.filter((todo)=>!todo.complete));
 }}/>
     </div>
   );
 }

export default App;
