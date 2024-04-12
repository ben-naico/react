import Dashboard from "./Dashboard";
import Login from "./Login";

export default function App(){
    let content;
    let isLoggedIn = true;
    if(isLoggedIn){
        content = <Dashboard/>
    }else{
        content = <Login/>
    }
    return(
        <>
        {content}
        </>
    );
}