import TodoItem from "./TodoItem";

function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
        <TodoItem key ={to}
     )   
    })
}
       </div>
    )
}
export default TodoList;