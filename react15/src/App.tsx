import Form from "./Form";

function App(){
    return(
        <div>
        <Form />
        </div>
        
    )
}
export default App;



































// import { useState } from "react";

// function App() {
//   const [inputValue, setInputValue] = useState("");      // user typing
//   const [submittedText, setSubmittedText] = useState(""); // text shown after Submit

//   const handleSubmit = () => {
//     setSubmittedText(inputValue);  // move input → submitted
//     setInputValue("");             // clear input field
//   };

//   return (
//     <>
//       <h2>Submitted: {submittedText}</h2>

//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//         placeholder="Type something..."
//       />

//       <button onClick={handleSubmit}>Submit</button>
//     </>
//   );
// }

// export default App;
