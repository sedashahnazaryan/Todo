function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {todo.id}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;