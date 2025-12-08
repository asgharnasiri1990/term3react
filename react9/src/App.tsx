import ListGroup from "./components/ListGroup";

function App() {
 let items = ['NYC', 'LA', 'Tokyo', 'London', 'Tehran']
  return (
  <div> 
    <ListGroup items={items} heading="cities :"/>
    </div>)

}

export default App;