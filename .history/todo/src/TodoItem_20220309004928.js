function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {todo.texk}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;