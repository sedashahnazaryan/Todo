function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox" checked={todo.compl}/>
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;