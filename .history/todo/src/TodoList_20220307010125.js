function TodoList({todos}){
    return(
       <div>
{
    todos.map((todo)=>{
     return(
         <div>{todos}</div>
     )   
    })
}
       </div>
    )
}
export default TodoList;