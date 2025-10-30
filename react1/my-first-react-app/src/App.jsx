import { useState } from "react"


const Card = ({title}) => {
  return(
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
const[]=useState()

  return(
    <div className="card-container">

    <Card title='Star wars' rating={5} iscool={true}  />  
    <Card title='Avatar'/>  
    <Card title='The lion king'/>  
    <Card title='Inception'/>
    
 
  </div>
  )
  
  
}


export default App