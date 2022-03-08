function TodoFooter({todos}){
    const completedSize = todos.filter((todo)=>todo.complete).length;
return(
    <div>
        <span>1/{todos.length} Completed</span>
        <button>Clear Completed</button>
    </div>
)
}
export default TodoFooter;