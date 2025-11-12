import { useState } from "react";

function Counter() {
    const [state, setState] = useState(0)

    function handleClick() { setState(state + 1000) }
    function handleClick2() { setState(state - 1000) }

    function handleReset() { setState(0) }

    return (
        <div>
            <h1>
                {state}
            </h1>

            <button onClick={handleClick}>Click</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleClick2}>Minus</button>


        </div>
    );
}


export default Counter;