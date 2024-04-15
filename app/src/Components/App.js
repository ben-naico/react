import { useState } from "react";
import Button from "./Button";

export default function App(){
    const[count, setCount ] = useState(0);

    function handlelick(){
        setCount(count+1)
    }
    return(
        <>
        <p>Counter Using Same Button</p>
        <Button count={count} onClick={handlelick}/>
        <br/>
        <br/>
        <Button count={count} onClick={handlelick}/>
        </>
    );
}