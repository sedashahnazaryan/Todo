function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={(e)=>{
                e.target.v/>
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;