import TodoItem from "./TodoItem";

function TodoList({todos,onChange,on}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         
         <TodoItem 
         key ={todo.id} todo={todo} onChange={} onDelete={} />
     )   
    })
}
       </div>
    )
}
export default TodoList;