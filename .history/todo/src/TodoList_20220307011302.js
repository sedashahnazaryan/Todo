import TodoItem from "./TodoItem";

function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
        <TodoItem
     )   
    })
}
       </div>
    )
}
export default TodoList;