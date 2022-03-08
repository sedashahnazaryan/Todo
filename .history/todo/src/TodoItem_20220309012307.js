function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={(e)=>{
                e.target./>
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;