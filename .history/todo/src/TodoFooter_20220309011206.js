function TodoFooter({todos}){
    todos.filter((todo)=>todo.complete);
return(
    <div>
        <span>1/{todos.length} Completed</span>
        <button>Clear Completed</button>
    </div>
)
}
export default TodoFooter;