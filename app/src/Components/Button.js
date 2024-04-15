import { useState } from "react";

export default function Button(){

    const [count, setState] = useState(0);
    function handleClick(){
        setState(count+1);
    }
    return(
        <button onClick={handleClick}>Clicked {count} Times</button>
    );
}