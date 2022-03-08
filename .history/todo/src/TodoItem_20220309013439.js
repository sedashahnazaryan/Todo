function TodoItem({todo,onChange,onDelete}){
return(
    <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={(e)=>{
                onChange({
                    ...todo,
                    complete: e.target.checked
                });
            }}/>
            {todo.text}
            <button onClick={()=>{
            onDelete >X</button>
        </label>
    </div>
)
}
export default TodoItem;