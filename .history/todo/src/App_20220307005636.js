import {useState}from "react";
import './App.css';

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
  }])


  return (
    <div className="App">
    <TouchList/>
    </div>
  );
}

export default App;
