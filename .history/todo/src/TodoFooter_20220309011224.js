function TodoFooter({todos}){
    todos.filter((todo)=>todo.complete).l;
return(
    <div>
        <span>1/{todos.length} Completed</span>
        <button>Clear Completed</button>
    </div>
)
}
export default TodoFooter;