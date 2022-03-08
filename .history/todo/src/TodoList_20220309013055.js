import TodoItem from "./TodoItem";

function TodoList({todos,onChang,eonDelete}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         
         <TodoItem 
         key ={todo.id} todo={todo} onChange={} onDelete={onDelete} />
     )   
    })
}
       </div>
    )
}
export default TodoList;