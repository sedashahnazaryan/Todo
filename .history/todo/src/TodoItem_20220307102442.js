function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            ( {todo.text}0
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;