function TodoItem(todo){
return(
    <div>
        <label>
            <input type="chechbox"/>
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;