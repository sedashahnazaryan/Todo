function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {todo.ta}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;