import { useState } from "react";



function Counter() {
    const [count, setCount] = useState(0)

    return (

        <div>
            {count > 0 ? <h1 style={{ marginLeft: "180px" }}> {count}</h1> : <h1 style={{ marginLeft: "125px" }}> {count}</h1>}

            {count<20 ? <button style={{ color: "green" }} onClick={() => { setCount(count + 1) }}>Increase Age   </button>:<button style={{ color: "green" }} onClick={() => { setCount(count + 1) }}>بمیر دیگه   ):</button>}

            {count > 0 && <button onClick={() => { setCount(0) }}>Reset Age</button>}

            {count > 0 ? <button style={{ color: "red" }} onClick={() => { setCount(count - 1) }}>Decrease Age  </button> : <button>Decrease Age </button>}

        </div >

    )


}

export default Counter;