function TodoFooter({todos}){
    const comletedtodos.filter((todo)=>todo.complete).length;
return(
    <div>
        <span>1/{todos.length} Completed</span>
        <button>Clear Completed</button>
    </div>
)
}
export default TodoFooter;