import { useState } from "react";

function TodoForm(){
    const [text,setText]=useState("");
    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            ongamepaddisconnected()
        }}>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
                }}/>
        <button>Add</button>
        </form>
    )
}
export default TodoForm;