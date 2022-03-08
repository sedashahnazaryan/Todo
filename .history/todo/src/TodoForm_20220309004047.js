import { useState } from "react";

function TodoForm(){
    const [text,setText]=useState("");
    return(
        <form onSubmit={(e}=>
            <input type="text" value={text} onChange={(e) => {
                setText(e.target.value);
                }}/>
        <button>+</button>
        </form>
    )
}
export default TodoForm;