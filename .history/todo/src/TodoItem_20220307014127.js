function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checbox"/>
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;