export default function Event() {

    function handleClick(){
        alert("Clicked!")
    }

    return(
        <button onClick={handleClick}>Click Me!</button>
    );
    
}