import {useState}from "react";
import './App.css';

function App() {
const[todos,setTodos]= useState([
  {
    id:Math.random(),
    text:"read the book"
  }
]

)


  return (
    <div className="App">
    <TouchList/>
    </div>
  );
}

export default App;
