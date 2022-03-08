function TodoFooter({todos,onC}){
    const completedSize = todos.filter((todo)=>todo.complete).length;
return(
    <div>
        <span>{completedSize}/{todos.length} Completed</span>
        <button onClick={}>Clear Completed</button>
    </div>
)
}
export default TodoFooter;