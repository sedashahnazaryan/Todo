function TodoItem({todo,onChange}){
return(
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={(e)=>{
                //e.target.checked/>
                onChange({
                    ...todo,
                    complete:e.target.ch
                })
            {todo.text}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;