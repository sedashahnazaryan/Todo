function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {todo.task}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;