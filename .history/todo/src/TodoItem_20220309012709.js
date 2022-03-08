function TodoItem({todo,onChange}){
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
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;