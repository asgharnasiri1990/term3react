import { useState } from "react";
import Status from "./Status";
import "./App.css";
import View from "./View"

function App() {
  const [isOnline, setIsOnline] = useState(false)
  
  const handleView = () => {
    isOnline && "please log in"
  }


  const toggleStatus = () => { setIsOnline(prev => !prev) }

  const btnColor = isOnline ? "btn btn-success" : "btn btn-danger"

  return (
    <>

      <Status isOnline={isOnline} />

      <button className={btnColor} onClick={toggleStatus}>
        {isOnline ? "Go Offline " : "Go Online"}
      </button>

      {isOnline ?
        <View /> :
        <p> Lorem ipsum dolor acceler <span style={{ cursor: "pointer" }} onClick={handleView} >...view more</span> </p>}




    </>
  )
};
export default App;