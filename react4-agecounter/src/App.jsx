import { useState } from "react";



function Counter() {
    const [count, setCount] = useState(0)

    return (

        <div>
            {count > 0 ? <h1 style={{ marginLeft: "220px" }}> {count}</h1> : <h1 style={{ marginLeft: "155px" }}> {count}</h1>}

            <button style={{ color: "green" }} onClick={() => { setCount(count + 1) }}>Increase likes + {count} </button>

            {count > 0 && <button onClick={() => { setCount(0) }}>Reset likes</button>}

            {count > 0 ? <button style={{ color: "red" }} onClick={() => { setCount(count - 1) }}>Decrease likes - {count} </button> : <button>Decrease Age -</button>}

        </div >

    )


}

export default Counter;

{toggle=true && <h1></h1> }