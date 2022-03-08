function TodoFooter({todos}){
    const completedSize = todos.filter((todo)=>todo.complete).length;
return(
    <div>
        <span>{completedSize}/{todos.length} Completed</span>
        <button on>Clear Completed</button>
    </div>
)
}
export default TodoFooter;