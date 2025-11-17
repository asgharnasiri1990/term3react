import { useState } from "react";



function Counter() {
    const [count, setCount] = useState(0)

    return (

        <div>
            {count > 0 ? <h1 style={{ marginLeft: "190px" }}> {count}</h1> : <h1 style={{ marginLeft: "135px" }}> {count}</h1>}

            {count>50 ? <button>بمیر دیگه</button>: <button onClick={() => { setCount(count + 1) }}>Increase Age + </button>}

            {count > 0 && <button onClick={() => { setCount(0) }}>Reset Age</button>}

            {count > 0 ? <button onClick={() => { setCount(count - 1) }}>Decrease Age - </button> : <button>Decrease Age -</button>}

        </div >

    )


}

export default Counter;
