import { useState } from "react";

function TodoForm(){
    const [text,setText]=useState("");
    return(
        <form>
            <input type="text" value={text}/>
        <button>+</button>
        </form>
    )
}
export default TodoForm;