import TodoItem from "./TodoItem";

function TodoList({todo}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         
         <TodoItem key ={todo.id} todo={todo} />
     )   
    })
}
       </div>
    )
}
export default TodoList;