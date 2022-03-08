function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {todo.text.id}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;