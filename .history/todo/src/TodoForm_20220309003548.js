import { useState } from "react";

function TodoForm(){
    const [text,setText]=useState("");
    return(
        <form>
            <input type="text" value={t}/>
        <button>+</button>
        </form>
    )
}
export default TodoForm;