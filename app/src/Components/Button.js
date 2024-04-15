export default function Button({count,onClick}){
    return(
        <button  onClick={onClick}>You have Clicked {count} Times</button>
    );
}