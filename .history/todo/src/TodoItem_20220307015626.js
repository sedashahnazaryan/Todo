function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {t}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;