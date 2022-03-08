function TodoFooter({todos}){
    const completedSize = todos.filter((todo)=>todo.complete).length;
return(
    <div>
        <span>{/{todos.length} Completed</span>
        <button>Clear Completed</button>
    </div>
)
}
export default TodoFooter;