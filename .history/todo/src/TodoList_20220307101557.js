import TodoItem from "./TodoItem";

function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         
         <To key ={todo.id} todo={todo} />
     )   
    })
}
       </div>
    )
}
export default TodoList;