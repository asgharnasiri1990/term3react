
// // alert and button components

// import { useState } from "react";
// import Alert from "./components/Alert"
// import Button from "./components/Button";

// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false)
//   return (
//     <div>
//       {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My alert</Alert>}
//       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//     </div>
//   )
// }
// export default App;


import ListGroup from "./components/ListGroup";

function App() {
  let items = ['NYC', 'LA', 'Tokyo', 'London', 'Tehran']
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return (
    <div>
      <ListGroup items={items} heading="cities :" onSelectItem={handleSelectItem} />
    </div>)

}
export default App;



// import Alert from './components/Alert'

// const App = () => {
//   return (
//     <div className='alert alert-primary'>
//       <Alert> 
//         <h2>Hello World!</h2>
//       </Alert>

//     </div>
//   )
// }

