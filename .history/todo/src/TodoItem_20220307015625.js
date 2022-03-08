function TodoItem({todo}){
return(
    <div>
        <label>
            <input type="checkbox"/>
            {}
            <button>X</button>
        </label>
    </div>
)
}
export default TodoItem;