import { useState } from "react";
import Status from "./Status";

function App() {
  const [isOnline, setIsOnline] = useState(true)

  const toggleStatus = () => {
    setIsOnline(prev => !prev)
  }

  const btnColor = isOnline ? "btn btn-success" : "btn btn-danger"
  
  return (
    <div>

      <Status isOnline={isOnline} />

      <button className={btnColor} onClick={toggleStatus}>
        {isOnline ? "Go Offline" : "Go Online"}
      </button>

    </div>
  )
};
export default App;