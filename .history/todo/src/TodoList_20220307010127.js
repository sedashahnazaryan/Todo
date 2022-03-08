function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         <div>{todo.}</div>
     )   
    })
}
       </div>
    )
}
export default TodoList;