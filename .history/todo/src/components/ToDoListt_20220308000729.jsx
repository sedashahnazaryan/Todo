import React  from "react";
import { useState } from "react";
import "./ToDoList.css"
const ToDolist = () =>{
    const [inputText, setInputText]= useState("");
    const [todos, setToDo] = useState([])
}
function hendleChengeInputText(e){
    setInputText(e.target.value);
    console.log(inputText);
}
function hendelToDoAdd(){
    if(!inputText)
const todo = {
    id: Math.random(),
    value: inputText,
    isCheked: false,
}
setToDo([...todos,todo]);
console.log ToDo(todos);
}
return(
    <div>
        <h1>ToDo</h1>
    </div>
    <input type ="text" value = {inputText}placeholder='add ToDo List' onChange={(e)=>{
        handleChangeInputText(e);
    }}/>
    <button onClick={}>Add</button>
    hendelToDoAdd()
)
