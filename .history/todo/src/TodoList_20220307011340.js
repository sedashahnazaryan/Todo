import TodoItem from "./TodoItem";

function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
        <TodoItem key ={todo.id} todo/>
     )   
    })
}
       </div>
    )
}
export default TodoList;