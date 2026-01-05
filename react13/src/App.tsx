import { useState } from "react";



function App() {
  const [count, setCount] = useState(5);

  const increase = () => {
    setCount(prev => (prev < 10 ? prev + 1 : prev))
  }

  const decrease = () => {
    setCount(prev => (prev > 0 ? prev - 1 : prev))
  }

  const getMessage = () => {
    if (count === 10) return ("Maximum reached")
    if (count === 0) return ("Minimum reached")

  };

  return (
    <>
      <h1>count:{count}</h1>

      <button onClick={increase}> + </button>
      <button onClick={decrease}> - </button>

      <p>{getMessage()}</p>

    </>
  )
};

export default App;