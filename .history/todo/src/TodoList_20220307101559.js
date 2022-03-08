import TodoItem from "./TodoItem";

function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         
         <Tod key ={todo.id} todo={todo} />
     )   
    })
}
       </div>
    )
}
export default TodoList;