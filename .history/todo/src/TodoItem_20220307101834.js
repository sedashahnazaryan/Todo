function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
             {todos.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;