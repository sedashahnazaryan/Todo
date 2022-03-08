function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {todo}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;