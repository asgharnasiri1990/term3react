const Card = ({title}) => {
  return(
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = () => {
  return(
    <div className="card-container">

    <h2>Functional arrow app is written here:</h2>

    <Card title='Star wars' rating={5} iscool={true} actors={[{name:'actors'}]} />  
    <Card title='Avatar'/>  
    <Card title='The lion king'/>  
    <Card title='Inception'/>
    
 
  </div>
  )
  
  
}


/*
const Card = ({title}) =>{
  return(
    <div>
      <h2>{title} </h2>
    </div>
    
  )
}


const App = () =>{
  return(
  <div>
    <h2>Hello from a new exercises:</h2>

    <Card title='New star wars' />
     <Card title='New Avatar'/>
     <Card title='new the lion king' />
   </div>
   )
 } */
export default App