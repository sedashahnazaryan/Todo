function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onCh/>
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;