
export default function App(){

    function getValue(){
        alert("Hey!")
    }
    return(
        <>
        <img className="avatar" alt="avatar" src="https://i.imgur.com/yXOvdOSs.jpg"/><br/>
        <button onClick={getValue}>Click Me</button>
        </>
    );

}