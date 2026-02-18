import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");

const handleSubmit=()=>{
  if (!input ) return;
  setText(input);
  setInput("") 
}

  return (

    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="type something" />
      <button onClick={handleSubmit}> Submit</button>

      <p>
        {text}
      </p>

    </>
  )
}

export default App;