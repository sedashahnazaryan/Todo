function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         <div>{todo.text}</div>
     )   
    })
}
       </div>
    )
}
export default TodoList;