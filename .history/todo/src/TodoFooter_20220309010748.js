function TodoFooter(todos){
return(
    <div>
        <span>1/{todos.len} Completed</span>
        <button>Clear Completed</button>
    </div>
)
}
export default TodoFooter;