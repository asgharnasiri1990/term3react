import React from "react";

function App(){

    return(
        <div>
            <Job salary={500} company="google" degree="boss" />
            <Job salary={777} company="amazone" degree="boss" />
        </div>
    )
}

export default App;



const Job=(props) =>{

    return(
    <div>
        <h1>{props.salary}</h1>
        <h2>{props.company}</h2>

    </div>

    )
}