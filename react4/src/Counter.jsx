import { useState } from "react";

function Counter() {
    const [count,setCount]= useState(0);

    return(
        <div>
            <h1 style={{margin: "50px", padding: "100px 200px"}}>
                React Counter: {count}
            </h1>
            
            {/* btn to increase */}
            <button
                onClick={() => setCount(count+1)}
                style={{margin: "50px", padding: "10px 20px"}}
                >
                 ➕Increase
            </button>


            {/* btn to decrease */}
            <button onClick={() => setCount(count-1)} 
            style={{margin: "50px", padding: "10px 20px"}} >
                ➖Decrease

            </button>

            {/* reset button */}
            <button onClick={() => setCount(0)}
            style={{margin:"5px", padding:"10px 20px"}}
            >
            🔁Reset
            </button>






        </div>
    )
}

export default Counter;